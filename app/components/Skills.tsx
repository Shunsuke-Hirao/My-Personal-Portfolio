import AnimatedTitle from "../AnimatedTitle";
 
export default function Skills() {
  const skillList = [
    "Java", "SQL", "C#", "JavaScript", 
    "HTML", "CSS", "React", "Node.js", "TypeScript"
  ];
 
  return (
    <section id="skills" className="max-w-5xl mx-auto px-10 py-24">
      <AnimatedTitle title="Skills" />
 
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {skillList.map((skill) => (
          <div
            key={skill}
            className="w-32 h-32 aspect-square flex items-center justify-center text-center p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl font-bold shadow-sm border border-gray-200 dark:border-gray-700 hover:scale-110 hover:shadow-xl hover:border-blue-500 transition-all duration-300 cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}