"use client"
import ProjectCard from "@/components/ProjectCard";
import { iranYekanFont } from "@/constants/localFonts";
import { useGetProjects } from "@/hooks/useProjects";

export default function ProjectsPage() {
    const { data, isPending } = useGetProjects();
    const { projects } = data || [];


    return (
        <section className="container mx-auto px-6 py-6 lg:pt-12 lg:px-0">
            <div className="flex flex-col items-start gap-4 mb-16">
                <h4 className={`title-box`}>
                    پروژه ها و نمونه کار های من
                </h4>
                <p className={`${iranYekanFont.variable} font-iranYekan text-sm text-textcolor`}>
                    استفاده از دانش ها در پروژه های مختلف
                </p>
            </div>


            <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 duration-200 ${isPending ? "opacity-25 blur-md" : "blur-none opacity-100"}`}>
                {!isPending && projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((project, index) => {
                    return (
                        <ProjectCard key={index} project={project}/>
                    )
                })}
            </div>
        </section>
    )
}