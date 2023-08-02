'use client'
import React ,{useCallback}from 'react';
import  Particles  from 'react-tsparticles';
import {loadFull} from 'tsparticles';

const ParticlesContainer = () => {
    //init
    const particlesInit=useCallback( async (engine)=>{
        await loadFull(engine)
    },[])
    const particileLoaded=useCallback(async()=> {} , [])

  return (
    <Particles className='w-full h-full absolute transalate-z-0'  id='tsparticles' init={particlesInit} loaded={particileLoaded}
    options={{
        fullScreen:{enable:true},
        background:{
            color:{
                value:""
            },
        },
        fpsLimit:120,
        interactivity:{
            events:{
                onClick:{
                    enable:false,
                    mode: 'push',
                },
            },
        },
        onHover:{
            enable:true,
            mode:'repulse',
        },
        resize:true,
        modes:{
            push:{
                quantity:90
            },
            repulse:{
                distance: 200,
                duration: 0.4,
            },
        },
        particles:{
            color:{
                value:'#e68e2e'
            },
            links:{
                color:"#f5d393",
                duration: 150,
                enable:true,
                opacity:1,
                width:1,
            },
            collisions:{
                enable:true,
            },
            move:{
                directions: 'none',
                enable:true,
                outModes:{
                    default : 'bounce'
                },
                random:true,
                speed:1,
                straight:false
            },
            number:{
                density:{
                    enable:true,
                    area:900,
                },
                value:80,
            },
            opacity:{
                value:1,
            },
            shape:{
                type: 'circle',
            },
            size:{
                value:{min:1, max:5},
            },
        },
        detectRetina:true
    }}
    />
  )
}

export default ParticlesContainer