import { IconBrandJavascript, IconBrandPython, IconLetterC, IconHtml, IconBrandReactNative } from "@tabler/icons-react"

const SupportLanguage = () => {
  return (
    <div>
        <div className="bg-[#111] mt-16 rounded-[2rem] mx-4 px-8 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Supported Languages
          </h2>
        
          
          {/* Language Grid */}
          <div className="grid grid-cols-4 gap-16 max-w-6xl mx-auto">
            < IconLetterC  size={80} className=" opacity-60 hover:opacity-100 transition-opacity" />
            < img  src="./javas.svg" className=" h-[80px] w-[80px]  opacity-60 hover:opacity-100 transition-opacity" />
            < IconBrandJavascript  size={80} className="  h-[80px] w-[80px]  opacity-60 hover:opacity-100 transition-opacity" />
            <IconBrandPython size={80}className=" opacity-60 hover:opacity-100 transition-opacity" />
            
            <  img  src="./kotlin.svg" className="h-[80px] w-[80px] opacity-60 hover:opacity-100 transition-opacity" />
            < img src="./C++.png" className="h-[80px]  w-[80px] opacity-60 hover:opacity-100 transition-opacity" />
            <  IconHtml  size={80} className=" opacity-60 hover:opacity-100 transition-opacity" />
            <  IconBrandReactNative size={80} className=" opacity-60 hover:opacity-100 transition-opacity" /> 
   
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportLanguage
