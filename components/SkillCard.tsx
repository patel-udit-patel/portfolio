import FadeIn from "./FadeIn";

interface SkillCardProps {
  title: string;
  skills: string[];
  index: number;
}

export default function SkillCard({ title, skills, index }: SkillCardProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors h-full">
        <h3 className="text-xl font-bold mb-6 text-blue-400">{title}</h3>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li 
              key={skill} 
              className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-md border border-gray-700"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}