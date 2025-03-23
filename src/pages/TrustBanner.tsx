const  TrustBanner=()=> {
    return (
      <div className="bg-[#111] mt-16 rounded-[2rem] mx-4 px-8 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Trusted by Leading Brands</h2>
          <p className="text-2xl text-white mb-16">for Secure, Privacy-First Surveys</p>
          {/* Brands Grid */}
          <div className="grid grid-cols-4 gap-16 max-w-6xl mx-auto">
            <img src="" alt="Brave" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="" alt="Yuga Labs" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="" alt="United Nations" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="" alt="Pepsico" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    );
  }
  export default TrustBanner;