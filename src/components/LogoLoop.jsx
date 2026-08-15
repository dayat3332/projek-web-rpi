import React from 'react'
import './LogoLoop.css'

export default function LogoLoop({
  logos = [],
  speed = 30,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}) {
  return (
    <div className={`logoloop-container ${className}`}>
      <div
        className={`logoloop-track ${pauseOnHover ? 'logoloop-pause-hover' : ''}`}
        style={{
          '--speed': `${speed}s`,
          '--direction': direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {/* Track 1 */}
        <div className="logoloop-group">
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="logoloop-item">
              {logo.node || (
                <span className="font-bold text-xl tracking-wider select-none">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless infinite loop) */}
        <div className="logoloop-group" aria-hidden="true">
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="logoloop-item">
              {logo.node || (
                <span className="font-bold text-xl tracking-wider select-none">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
