import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default function RobotViewer() {
  const mountRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const currentMount = mountRef.current
    if (!currentMount) return

    const initialWidth = currentMount.clientWidth || 500
    const initialHeight = currentMount.clientHeight || 450

    // 1. Scene
    const scene = new THREE.Scene()

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      initialWidth / initialHeight,
      0.1,
      1000
    )
    camera.position.set(0, 1.8, 4.5)

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(initialWidth, initialHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.25
    currentMount.appendChild(renderer.domElement)

    // 4. Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8)
    keyLight.position.set(5, 8, 5)
    scene.add(keyLight)

    const blueRimLight = new THREE.DirectionalLight(0x3b82f6, 2.2)
    blueRimLight.position.set(-5, -2, -3)
    scene.add(blueRimLight)

    const frontLight = new THREE.DirectionalLight(0xffffff, 1.5)
    frontLight.position.set(0, 2, 5)
    scene.add(frontLight)

    // 5. Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.autoRotate = true
    controls.autoRotateSpeed = 2.2
    controls.enableZoom = true
    controls.maxDistance = 12
    controls.minDistance = 1.2
    controls.target.set(0, 0, 0)

    // 6. Load GLTF / GLB Model
    const loader = new GLTFLoader()
    let model = null

    loader.load(
      '/spider_robot.glb',
      (gltf) => {
        model = gltf.scene

        // Auto compute bounding box to center & auto-scale model perfectly
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())

        // Center model
        model.position.x = -center.x
        model.position.y = -center.y
        model.position.z = -center.z

        // Normalize scale
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 2.6 / (maxDim || 1)
        model.scale.set(scale, scale, scale)

        scene.add(model)
        setLoading(false)
      },
      undefined,
      (err) => {
        console.error('Error loading 3D spider robot model:', err)
        setError('Gagal memuat file spider_robot.glb')
        setLoading(false)
      }
    )

    // 7. Responsive handling
    const handleResize = () => {
      if (!currentMount) return
      const width = currentMount.clientWidth
      const height = currentMount.clientHeight
      if (width > 0 && height > 0) {
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
      }
    }

    const resizeObserver = new ResizeObserver(() => handleResize())
    resizeObserver.observe(currentMount)

    // 8. Animation loop
    let animationFrameId
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      controls.dispose()
      renderer.dispose()
      if (currentMount && renderer.domElement && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement)
      }
      scene.clear()
    }
  }, [])

  return (
    <div className="relative w-full h-[380px] md:h-[480px] flex items-center justify-center">
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />

      {/* Loading State */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl z-10">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-semibold text-slate-700">
            Memuat Model 3D Spider Robot...
          </p>
        </div>
      )}

      {/* Error Fallback */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center z-10">
          <p className="text-sm text-red-500 font-medium">{error}</p>
        </div>
      )}

      {/* Interactive Floating Badge */}
      {!loading && !error && (
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-sm pointer-events-none select-none">
          <span className="text-[12px] font-medium text-slate-600">
            Putar & Zoom 3D
          </span>
        </div>
      )}
    </div>
  )
}
