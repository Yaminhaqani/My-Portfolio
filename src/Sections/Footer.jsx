
const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-5 sm:px-10 px-5 pt-7 pb-3 border-t border-[#1C1C21] text-center"> 
    <div className="text-[#62646C] flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
    </div>

    <div className="flex gap-3">

        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-[#1C1C21] border border-[#0E0E10]">
            <a href="https://github.com/Yaminhaqani" target="_blank" rel="noreferrer"  className="w-1/2 h-1/2">
            <img src="/assets/github.svg" alt="github" className="w-full h-full"/>
            </a>
        </div>

          <div className="w-12 h-12 rounded-full flex justify-center items-center bg-[#1C1C21] border border-[#0E0E10]">
            <a href="https://x.com/yaminhaqani1" target="_blank" rel="noreferrer"  className="w-1/2 h-1/2">
            <img src="/assets/twitter.svg" alt="twitter" className="w-full h-full"/>
            </a>
        </div>

        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-[#1C1C21] border border-[#0E0E10]">
            <a href="https://www.instagram.com/yaminhaqani/#" target="_blank" rel="noreferrer"  className="w-1/2 h-1/2">
            <img src="/assets/instagram.svg" alt="instagram" className="w-full h-full"/>
            </a>
        </div>

        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-[#1C1C21] border border-[#0E0E10]">
            <a href="https://www.linkedin.com/in/yamin-haqani-30868b2b1/?originalSubdomain=in" target="_blank" rel="noreferrer"  className="w-1/2 h-1/2">
            <img src="/assets/linkedin.svg" alt="linkedin" className="w-full h-full invert bg-white"/>
            </a>
        </div>
    </div>
    <div> <p className="text-[#62646C] mx-auto">&copy;2025 Yamin. All rights reserved</p></div>
           
    </footer>
  )
}

export default Footer