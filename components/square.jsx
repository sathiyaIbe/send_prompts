import { Cube } from './Cube';
import { Canvas } from '@react-three/fiber'
import React from 'react'

const square = () => {
  return (
    <div>
        <Canvas>
            <OrbitControls enableZoom={false}  />
            <ambientLight intensity={1} />
            <directionalLight  position={[3,2,1]} />
           <Cube     />
        </Canvas>
    </div>
  )
}

export default square