import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function Projects(){
    const {data: projects, error}= await supabase.from("projects").select("*");

    if(error){
        console.error("data error:", error);
        return <section className="px-36 mb-[200px] h-screen text-center">エラーが発生しました</section>;
    }

    // const displayProjects= projects ? [...projects, ...projects] : [];
    const displayProjects= projects ? projects : [];
    
    return(
        <section className="mb-[200px] w-full overflow-hidden h-screen flex flex-col  items-center justify-center">
            <h2 className="text-center text-6xl my-15">Project List</h2>

            <div className="relative w-max mx-auto">
                <div className="flex gap-10">
                    {displayProjects.map((project, index) => (
                        <Link 
                            key={`${project.id}-${index}`}
                            href={project.link || "#"}
                            className="relative w-[600px] h-[400px] flex-shrink-0 cursor-pointer group rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img 
                                src={`/projectList/${project.image_url}`}
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-10 text-center">
                                <h3 className="text-white text-4xl font-bold mb-4">{project.title}</h3>
                                <p className="text-white/90 text-lg">{project.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            
        </section>
        
    );
}