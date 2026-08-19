import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "Kontes Robot SAR Indonesia",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  },
  {
    title: "Autonomous Agricultural Robot",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=600&h=400&fit=crop",
  },
  {
    title: "Kontes Robot Terbang VTOL",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
  },
  {
    title: "Inverse Kinematics Spider Robot",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600&h=400&fit=crop",
  },
  {
    title: "IoT Smart Monitoring System",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop",
  },
  {
    title: "Riset Computer Vision",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
  },
  {
    title: "3D Printed Robotic Arm",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
  },
  {
    title: "Embedded Systems Workshop",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    title: "Line Follower Competition",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&h=400&fit=crop",
  },
  {
    title: "Drone Navigation System",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=600&h=400&fit=crop",
  },
  {
    title: "Machine Learning for Robotics",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    title: "PCB Design & Prototyping",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
  },
  {
    title: "Humanoid Robot Project",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=600&h=400&fit=crop",
  },
  {
    title: "ROS Development Workshop",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1531746790095-e5982fb7c164?w=600&h=400&fit=crop",
  },
  {
    title: "Underwater ROV Challenge",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=600&h=400&fit=crop",
  },
  {
    title: "Mikrokontroler Arduino Lab",
    link: "#blog",
    thumbnail:
      "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=600&h=400&fit=crop",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="w-full border-t border-slate-200/80">
      <HeroParallax products={products} />
    </section>
  );
}
