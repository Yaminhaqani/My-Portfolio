import React, { Suspense, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { myProjects } from "../Constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader";
import DemoComputer from "../Components/DemoComputer";


const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjIndex, setSelectedProjIndex] = useState(0);
    

    const currentProject = myProjects[selectedProjIndex];

    const [dir, setDir] = useState(null)  //for animation

    

    const handleNav = (direction)=>{
        setDir(direction);
        setSelectedProjIndex((prevIndex)=>{
            if(direction === 'prev'){
                return prevIndex === 0 ? projectCount - 1 : prevIndex -1;
            } else{
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        })
    }

    
  return (
    <section className="sm:px-10 px-5 my-20" id="projects">
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once:"true", amount: 1 }}
        // transition={{opacity:{duration:1, ease:"easeInOut"},
        //              y:{duration: 0.3, ease:"easeIn"}}}
        transition={{
          y: {
            type: "spring",
            stiffness: 200,
            damping: 8,
          },
          opacity: {
            duration: 1.2,
            ease: "easeOut",
          },
        }}
        className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent"
      >
        My Work
      </motion.p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full overflow-hidden">
        {/* exit animation wont work because new project mounts faster, for this, AnimatePresence tag will help  */}
        <div
         className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-[#0E0E10]">
          <AnimatePresence mode="wait">
          <motion.div
          key={selectedProjIndex} 
        initial={{opacity:0, scale:0.8}}
        animate={{opacity:1, scale:1}}
        exit={{ opacity:0, scale:0.8}}
        transition={{duration:0.3}} className="w-full">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div className="p-3 backdrop-brightness-110 backdrop-blur-3xl w-fit rounded-lg" style={myProjects[0].logoStyle}>
            <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
          </div>

          <div className="flex flex-col gap-5 text-[#AFB0B6] my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index)=>(
                    <div key={index} className="w-10 h-10 rounded-md p-2 bg-neutral-100/10 backdrop-filter backdrop-blur-lg flex justify-center items-center">
                        <img src={tag.path} alt={tag.name} />
                    </div>
                ))}
            </div>

            <a className="flex items-center gap-2 cursor-pointer text-[#AFB0B6]" 
             href={currentProject.href} target="_blank" rel="noreferrer">
                <p>Check Live Site</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>
          </motion.div>
          </AnimatePresence>
          <div className="flex justify-between items-center mt-7">
            <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full bg-gradient-to-r from-white/10 via-transparent to-white/5"
             onClick={()=> handleNav('prev')}>
                <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
            </button>

            <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full bg-gradient-to-r from-white/10 via-transparent to-white/5"
             onClick={()=> handleNav('next')}>
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>

          </div>
        </div>
        

        <div className="border border-[#1C1C21] bg-[#0E0E10] rounded-lg h-96 md:h-full">
            <Canvas>
                <ambientLight intensity={Math.PI} />
                <directionalLight position={[10, 10, 5]} />
                {/* centers the 3d model on the screen */}
                <Center>
                    <Suspense fallback={<CanvasLoader/>}>
                    <group scale={2} position={[0,-3,0]} rotation={[0, -0.1, 0]}>
        
                        <DemoComputer texture={currentProject.texture}/>

                    </group>
                    </Suspense>
                </Center>
                {/* Math.PI/2 will not be able to go below the table  */}
                <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
            </Canvas>

        </div>
      </div>
    </section>
  );
};

export default Projects;
