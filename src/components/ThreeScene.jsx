import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function ThreeScene() {
  return (
    <Canvas className="h-[600px]">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      <Sphere args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="hsl(189, 94%, 55%)"
          attach="material"
          distort={0.5}
          speed={2}
          wireframe
        />
      </Sphere>
    </Canvas>
  );
}
