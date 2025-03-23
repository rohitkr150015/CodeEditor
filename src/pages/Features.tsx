import FeatureCard from "./FeatureCard";
import { IconBrandAdobeIllustrator, IconBrandTinderFilled, IconDeviceDesktop, IconHourglassEmpty, IconShare, IconWorld } from "@tabler/icons-react";

 export default function Features() {
    const featureData = [
      { icon: <IconWorld className="w-8 h-8" />, title: "Support Multiple Language", description: "ode in your preferred language effortlessly. Our platform supports multiple programming languages for a seamless development experience" },
      { icon: <IconBrandTinderFilled className="w-8 h-8" />, title: "Work Folder Wise", description: "Organize your projects efficiently by working folder-wise. Keep your files structured and navigate your workspace with ease." },
      { icon: <IconHourglassEmpty className="w-8 h-8" />, title: "Save Code", description: "Never lose your progress—save your code instantly and access it anytime. Keep track of changes and streamline your workflow." },
      { icon: <IconShare className="w-8 h-8" />, title: "Real Time Code Shareing", description: "Collaborate in real-time with peers and teams. Share your code instantly and work together on projects from anywhere" },
      { icon: <IconDeviceDesktop className="w-8 h-8" />, title: "Interactive Ui", description: "Experience a user-friendly, interactive interface designed for maximum productivity and ease of use" },
      { icon: <IconBrandAdobeIllustrator className="w-8 h-8" />, title: "Ai for Help", description: "Leverage AI-powered assistance to debug, optimize, and improve your code. Get smart suggestions and enhance your coding skills." }
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-[#111] text-center mb-16">Why CodeEditor</h2>
        <div className="grid grid-cols-3 gap-12">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    );
  }