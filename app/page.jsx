'use client'
import { Cube } from "@components/Cube"
import Feed from "@components/Feed"
import ParticlesContainer from "@components/ParticlesContainer"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <ParticlesContainer />
      <h1 className="head_text text-enter">Discover and share <br className="max-md:hidden" /> 
      <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center mb-11">Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative promptsCoops</p>
      <div className="h-full">
      <Canvas>
            <OrbitControls enableZoom={false}  />
            <ambientLight intensity={1} />
            <directionalLight  position={[3,2,1]} />
           <Cube     />
        </Canvas>
        </div>
      <Feed />
    </section>
  )
}

export default Home
