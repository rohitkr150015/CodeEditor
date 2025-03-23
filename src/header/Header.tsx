import { IconCode } from "@tabler/icons-react"
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div>
       <nav className="bg-[#1a1a1a] py-4 px-6 flex items-center justify-between rounded-t-[2rem]">
      <div className="flex items-center space-x-2">
        <IconCode className="w-8 h-8 text-white" />
        <Link to="/" className="text-white text-xl font-bold">CodeEditor</Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link to="/features" className="text-gray-300 hover:text-white">Features</Link>
        <a href="https://github.com/rohitkr150015"  target="_blank"
            rel="noopener noreferrer" className="text-gray-300 hover:text-white">GitHub</a>
        <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>

        <Link to="/start-coding" className="px-4 py-2 rounded-full border  bg-wild-sand-700 text-white hover:bg-gray-900">Start Coding</Link>
        <Link to="/join-session" className="px-4 py-2 rounded-full  border-gray-600 text-white hover:bg-gray-800">Join Session</Link>
      </div>
    </nav>
    </div>
  )
}

export default Header
