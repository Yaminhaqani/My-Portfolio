import React, { Suspense } from "react";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../Components/HackerRoom";
import CanvasLoader from "../Components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import Target from "../Components/Target";
import ReactLogo from "../Components/ReactLogo";
import Cube from "../Components/Cube";
import Rings from "../Components/Rings";
import HeroCamera from "../Components/HeroCamera";
import Button from "../Components/Button";

const Hero = () => {
  // const controls = useControls("Rings", {
  //   positionX: {
  //     value: 0.9,
  //     min: -30,
  //     max: 30,
  //   },
  //   positionY: {
  //     value: 0.9,
  //     min: -30,
  //     max: 30,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -30,
  //     max: 20,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.005,
  //     max: 1,
  //   },
  // });
  const isMobile = useMediaQuery({ maxWidth: 625 });
  const isTablet = useMediaQuery({ minWidth: 626, maxWidth: 1024 });

  // motion variant
  const waveAnimation = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, 14, -8, 14, -4, 10, 0], // sequence of rotations
      transition: {
        duration: 2,
        // ease: "easeInOut",
        ease: ["easeOut", "easeIn", "easeInOut", "linear", "circIn", "backOut"],
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1],
      },
    },
  };

  return (
    <>
      <style>
        {`
          .gradient-text {
            background: linear-gradient(90deg, #bec1c4cb , white);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-size: 2rem;
            font-weight: bold;
             animation: shimmer 3s linear infinite;
          }
        `}
      </style>

      <section
        className="min-h-screen 
    w-full flex flex-col relative" id="home"
      >
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3  sm:px-10 px-5">
          <p className="sm:text-3xl text-2xl font-medium text-white text-center font-sans">
            Hi, I am Yamin{" "}
            <motion.span
              className="inline-block"
              style={{ transformOrigin: "70% 70%" }}
              variants={waveAnimation}
              initial="initial"
              animate="animate"
            >
              👋
            </motion.span>
          </p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-sans font-black pb-3.5"
          >
            Crafting Digital Experiences
          </motion.p>
        </div>

        <div className="w-full h-full absolute inset-0 sm:pt-24 pt-0">
          {/* <Leva /> */}
          {/* leava is used to find coordinates on browser for 3d model using controls above */}
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 22]} />
                  {/* <OrbitControls enableZoom={true} enableRotate={false} enablePan={true} minDistance={2} maxDistance={50}/> */}
                  <HeroCamera isMobile={isMobile} isTablet={isTablet}>
                                <HackerRoom
                position={[0.9, isMobile ? -5 : -6.3, isMobile ? -15.0 : -7]}
                rotation={[0.15, -Math.PI, 0]}
                //scale can use 1 value for all 3
                scale={isMobile ? 0.09 : 0.1}
              />
                  </HeroCamera>
              <group>
                <Target
                  position={
                    isMobile
                      ? [-4, -7, -2.3]
                      : isTablet
                      ? [-6, -7.2, 2.5]
                      : [-12, -8.5, -2.3]
                  }

                  // position={[controls.positionX, controls.positionY, controls.positionZ]}
                  //             rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
                  //             scale={controls.scale}
                />
                <ReactLogo
                  position={
                    isMobile
                      ? [3.6, 4.2, 2.5]
                      : isTablet
                      ? [6.2,5.8, 2.5]
                      : [10.5, 5.6, 2.5]
                  }
                  rotation={[0, 0, 0]}
                  scale={0.0039}
                  // position={[controls.positionX, controls.positionY, controls.positionZ]}
                  // rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
                  // scale={controls.scale}
                />

                <Cube 
                position={isMobile? [2.4, -3.3, 6.9]
                  : isTablet? [3.3, -3.0, 9.7] 
                : [7.8, -3.8, 7.7]}
                  scale={0.5}
                />

                <Rings 
                position={isMobile?[-12.7, 21.3, -23.5] 
                  : isTablet ? [-17.1, 22.5, -13.5]
                  : [-24.3, 15.9, -8]
                }
                // position={[controls.positionX, controls.positionY, controls.positionZ]}
                  />
              </group>

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>

        <div className="absolute bottom-7 left-0 right-0 w-full z-10 sm:px-10 px-5">
          <a href="#about" className="w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
