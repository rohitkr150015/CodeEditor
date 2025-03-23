// import { IconBrandLinkedin, IconBrandGithub, IconBadgeCc, IconCode } from "@tabler/icons-react"
// import { Heart } from "lucide-react"

// const Footer=()=>{
  
//     return(
//         <footer className="bg-wild-sand-100 mt-16 rounded-[2rem] mx-4 px-8 py-16">
//         <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8">
//           {/* Logo Column */}
//           <div className="col-span-1">
//             <IconCode className="w-8 h-8 text-red-600" />
//             <span className="text-red-600 text-xl font-bold block mt-2">CodeEditor</span>
//           </div>


//           {/* For Links */}
//           <div>
//             <h3 className="text-red-600 font-semibold mb-4">For</h3>
//            <p>Made For Edunet Intership </p>
//           </div>

        

        
//           {/* <div>
//             <div className="mb-8">
//               <h3 className="text-red-600 font-semibold mb-4">Contact</h3>
              
//             </div>
//              */}
//         </div>

//         {/* Social Links */}
//         <div className="max-w-7xl mx-auto mt-16 flex justify-between items-center">
//           <div className="flex space-x-4">
//           <IconBrandLinkedin/>
//           <IconBrandGithub/>
//           <IconBadgeCc/>
//           </div>
//           <div className="text-gray-500 flex items-center">
//             Made to  <Heart className="w-4 h-4 text-red-600 mx-1" /> leverage
//           </div>
//         </div>
//       </footer>
//     )
// }

// export default Footer


import { Heart } from "lucide-react";
import { IconBrandLinkedin, IconBrandGithub, IconBadgeCc, IconCode } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white to-gray-50 mt-16 rounded-3xl mx-4 px-8 py-16 shadow-lg">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2">
              <IconCode className="w-10 h-10 text-red-600" />
              <span className="text-red-600 text-2xl font-bold">CodeEditor</span>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Empowering developers with powerful code editing tools.
            </p>
          </div>

          {/* For Links Column */}
          <div className="col-span-1">
            <h3 className="text-red-600 font-semibold text-lg mb-4">About</h3>
            <div className="space-y-3">
              <p className="text-gray-600">Made For Edunet Internship</p>
              <p className="text-gray-600">Building the future of code editing</p>
            </div>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h3 className="text-red-600 font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          

          {/* Contact Column */}
          <div className="col-span-1">
            <h3 className="text-red-600 font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@codeeditor.com" className="text-gray-600 hover:text-red-600 transition-colors">
                  rohit.kumar.ds.2022@mitmeerut.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                <IconBrandLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                <IconBrandGithub className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                <IconBadgeCc className="w-6 h-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-600 flex items-center text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-600 mx-1" />
              <span>to leverage development</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;