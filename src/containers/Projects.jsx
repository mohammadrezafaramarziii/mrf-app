"use client"
import { ArrowLeftIcon } from "@/common/icons/BoldIcons";
import ProjectCard from "@/components/ProjectCard";
import { iranYekanFont } from "@/constants/localFonts";
import { useGetProjects } from "@/hooks/useProjects";
import Link from "next/link";

export default function Projects() {
    const { data, isPending } = useGetProjects();
    const { projects } = data || [];

    return (
        <section id="projects" className={`w-full duration-200 ${isPending ? "opacity-25 blur-md" : "blur-none opacity-100"}`}>
            <div className="mb-12 flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-4">
                    <h4 className={`title-box`}>
                        بخشی از پروژه های من
                    </h4>
                    <p className={`${iranYekanFont.variable} font-iranYekan text-sm text-textcolor`}>
                        و استفاده از دانش ها در پروژه های مختلف
                    </p>
                </div>
                <div>
                    <Link href={'/projects'} className="btn btn--primary gap-3 text-xs">
                        مشاهده همه
                        <ArrowLeftIcon className="w-6 h-6" />
                    </Link>
                </div>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
                {!isPending && projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4).map((project, index) => {
                    return (
                        <ProjectCard key={index} project={project} />
                    )
                })}
            </div>
        </section>
    )
}