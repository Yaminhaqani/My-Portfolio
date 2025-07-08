import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../Components/Button';

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    //MOT WORKING ON MOBILE
    // const handleCopy = ()=>{
    //     navigator.clipboard.writeText('Yaminhaqani@gmail.com');
    //     setHasCopied(true);

    //     setTimeout(() => {
    //         setHasCopied(false);
    //     }, 2000);
    // }

    const handleCopy = () => {
  const textToCopy = 'Yaminhaqani@gmail.com';
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (!isIOS && navigator.clipboard && window.isSecureContext) {
    // Use modern clipboard API where possible (desktop & newer Android)
    navigator.clipboard.writeText(textToCopy).then(() => {
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    }).catch(err => {
      console.error('Clipboard API failed:', err);
      fallbackCopyTextToClipboard(textToCopy);
    });
  } else {
    // Fallback for iOS and older browsers
    fallbackCopyTextToClipboard(textToCopy);
  }
};

// Fallback function
const fallbackCopyTextToClipboard = (text) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed"; // Avoid scrolling issues
  textArea.style.top = "-999999px";
  textArea.style.left = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  } catch (err) {
    console.error('Fallback copy failed', err);
  }

  document.body.removeChild(textArea);
};

  return (

    <section className=' sm:px-10 px-5 my-20' id='about'>
        <div className=' grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>

            <div className='col-span-1 xl:row-span-3'>
                   <div className='w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                <div>
                    <p className=' text-xl font-semibold mb-2 text-white font-sans'>Hi, I'm Yamin</p>
                    <p className='text-[#afb0b6] text-base font-sans'>With 8 months of hands-on internship experience in MERN stack development, I've sharpened my full-stack skills and am constantly learning to level up my craft.</p>
                </div>
            </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />
                    <div>
                        <p className='text-xl font-semibold mb-2 text-white font-sans'>Tech Stack</p>
                        <p className='text-[#afb0b6] text-base font-sans leading-relaxed'>
  <span className="font-semibold text-white">Frontend:</span> React, Redux, JavaScript, jQuery, Tailwind CSS, Vite.<br />
  <span className="font-semibold text-white">Backend:</span> Node.js, Express, MongoDB, Mongoose, REST API.<br />
  <span className="font-semibold text-white">3D & Animation:</span> Framer Motion (advanced), basic experience with Three.js, react-three/fiber, drei, and GSAP.<br />
  <span className="font-semibold text-white">Tools & Deployment:</span> Git, GitHub, Postman, ThunderClient, Render, Vercel, Netlify.
</p>

                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                        <Globe 
                        height={326} 
                        width={326} 
                        backgroundColor='rgba(0,0,0,0)'
                        backgroundImageOpacity={0.5} 
                        showAtmosphere 
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        labelsData={[{ lat: 34.06717396162232, lng: 74.78016446477241, text: "I'm here!", color: 'white', size: 20 }]}
                        
                        />
                    </div>
                    <div>
                         <p className='text-xl font-semibold mb-2 text-white font-sans'>I can work remotely across timezones.</p>
                        <p className='text-[#afb0b6] text-base font-sans'>I'm based in Kashmir, India — available for remote opportunities worldwide.</p>
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                    </div>
                </div>
            </div>
            
            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain'/>
                    <div>
                         <p className='text-xl font-semibold mb-2 text-white font-sans'>Crafting Web Solutions with Passion</p>
                        <p className='text-[#afb0b6] text-base font-sans'>I love crafting seamless web experiences and solving complex problems through code. Full stack development isn't just my profession — it's my passion.</p>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                    <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/>
                    <div className='space-y-2'>
                        <p className='text-[#afb0b6] text-base font-sans text-center'>Contact me.</p>
                        <div className='cursor-pointer flex justify-center items-center gap-2' 
                        onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                            {!hasCopied && <p className='md:text-xl font-medium bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent'>Yaminhaqani@gmail.com</p>}
                             {hasCopied && (
        <span className="text-sm text-gray-500 transition-opacity duration-300 animate-bounce">
            Email copied to clipboard!
        </span>
    )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}

export default About
