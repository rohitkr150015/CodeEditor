interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
      <div className="p-6 rounded-xl bg-[#fffdfd] hover:bg-gray-100 transition-colors">
        <div className="text-red-600 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-woodsmoke-200 mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    );
  }

  // bg-[#fffdfd]