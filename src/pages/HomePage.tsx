


const HomePage = () => {
  return (
<div className="text-center py-24 px-4">
    <h1 className="text-6xl font-bold text-white mb-6">
    Code Together, Anytime, Anywhere!
      <br />
      {/* with Confidence. <span className="underline decoration-red-600">Seamless, Fast!</span> */}
      <span className="text-red-600">Modern Development</span>
    </h1>
    <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-lg">
    Empower your team with a real-time code editor built for collaboration. Work together on projects effortlessly with live updates, secure storage, and an intuitive interface
    </p>
    <div className="flex justify-center gap-4">
      <a href="" className="px-6 py-4 rounded-full text-lg  bg-wild-sand-700 text-white hover:bg-gray-900 font-medium">
        Start Coding
      </a>
      <a href="" className="px-6 py-4 text-lg  rounded-full border border-gray-600 text-white hover:bg-gray-800 font-medium">
        Join Session
      </a>
    </div>
    <div className="text-gray-500 mt-4 text-sm">
      No any cost requires
    </div>

  </div>
    
  )
}

export default HomePage
