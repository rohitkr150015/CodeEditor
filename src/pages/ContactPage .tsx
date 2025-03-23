

// const ContactPage  = () => {
//   return (
//     <div className=" py-14 px-4">
//     <h1 className="text-6xl text-center font-bold text-white mb-6"> Contact</h1>
//     <div className="m-6 p-9">
//       <div className="m-2">
//         <h2 className="flex text-2xl text-[#dc2626]">Professional Background</h2>
//         <span className="text-xl font-semibold text-woodsmoke-50">Name</span>
//         <p className="gap-2 text-woodsmoke-100"> Rohit Kumar</p>
//       </div>
//       <div>
       
//         <span className="text-xl font-semibold text-woodsmoke-50">Education</span>
//         <p className="gap-2 text-woodsmoke-100"> <span>Btech (DS)</span> Meerut Institute of Technology</p>
//       </div>
//       <div>
//         <span className="text-xl font-semibold text-woodsmoke-50">Skills</span>
//         <p className="gap-2 text-woodsmoke-100">Efficient with Java , Spring boot, Python ,React,TypeScript</p>
//       </div>

//     </div>
//       </div>
//   )
// }

// export default ContactPage 
const ContactPage = () => {
  return (
    <div className="py-14 px-6 ">
      <h1 className="text-6xl text-center font-bold text-white mb-8">Contact</h1>
      <div className="p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="mb-6">
          <h2 className="text-2xl text-red-600 mb-4">Professional Background</h2>
          <div className="mb-4">
            <span className="text-xl font-semibold text-gray-300 block">Name</span>
            <p className="text-gray-400">Rohit Kumar</p>
          </div>
          <div className="mb-4">
            <span className="text-xl font-semibold text-gray-300 block">Education</span>
            <p className="text-gray-400">BTech (DS), Meerut Institute of Technology</p>
          </div>
          <div>
            <span className="text-xl font-semibold text-gray-300 block">Skills</span>
            <p className="text-gray-400">Efficient with Java, Spring Boot, Python, React, TypeScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
