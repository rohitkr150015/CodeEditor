import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Features from "./Features";
import HomePage from "./HomePage";
import SupportLanguage from "./SupportLanguage";
import FeaturenHeader from "../component/FeaturenHeader";
import ContactPage from "./ContactPage ";
import StartCodingPage from "./StartCodingPage";
import JoinSessionPage from "./JoinSessionPage"


const AppRouter = () => {
    const location=useLocation();
  return (

      <div className="min-h-screen bg-white">
        <div className="bg-[#111] rounded-[2rem] mx-4 mt-4 overflow-hidden">
          <Header />
          <Routes>
            <Route path="/features" element={<FeaturenHeader />} />
            <Route path="/contact" element={<ContactPage />}/>
            <Route path="/start-coding" element={<StartCodingPage />} />
            <Route path="/join-session" element={<JoinSessionPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
       
{location.pathname ==="/" && (
    <>
    <Features />
    <SupportLanguage />
    </>
)}

        <Footer />
      </div>
  
  );
};

export default AppRouter;
