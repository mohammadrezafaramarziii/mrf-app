import { ArrowLeftIcon, WidgetIcon, WrenchIcon } from "@/common/icons/BoldIcons";
import { CategoryIcon, LeftSquareIcon } from "@/common/icons/BrokenIcon";
import { iranYekanFont } from "@/constants/localFonts";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function ProjectCard({ project }) {

    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };

    const handleError = () => {
        setLoading(false);
        // Handle error if necessary
    };

    return (
        <div>
            <div className="relative group overflow-hidden">

                {/* image */}
                <div className={`aspect-w-11 aspect-h-9 group-hover:opacity-50 duration-300 ease-out ${loading && "rounded-2xl bg-primary-300/50"}`}>
                    <Image
                        src={`/images/projects/${project.image}`}
                        alt={project.title}
                        width={1000}
                        height={1000}
                        loading="lazy"
                        onLoad={handleLoad}
                        onError={handleError}
                        className="w-full h-full object-cover object-center rounded-2xl "
                    />
                </div>

                <div className="w-full absolute translate-y-full group-hover:translate-y-0 duration-200 ease-out bottom-0 right-0 px-6 pb-3">
                    <div className="w-full flex items-center gap-2 mb-3">
                        {
                            project.state === "در حال توسعه" ?
                                <div className="flex py-2 p-3 rounded-xl items-center gap-2 text-xs bg-primary-200 text-textcolor">
                                    <WrenchIcon className="w-4 h-4" />
                                    <span>
                                        در حال توسعه
                                    </span>
                                </div>
                                :
                                <div className="flex py-2 p-3 rounded-xl items-center gap-2 text-xs bg-primary-300 text-textcolor">
                                    <WrenchIcon className="w-4 h-4" />
                                    <span>
                                        اتمام توسعه
                                    </span>
                                </div>
                        }
                    </div>
                    <div className="w-full p-6 rounded-2xl flex flex-col gap-3 sm:gap-6 bg-gradient-to-tl from-primary-100 to-primary-300">
                        <Link href={project.link} target="blank" className="flex items-center justify-between">
                            <div>
                                <h1 className="text-base md:text-2xl font-bold text-white">
                                    {project.title}
                                </h1>
                            </div>
                            <div>
                                <button className="btn text-textcolor">
                                    <LeftSquareIcon className="w-8 h-8" />
                                </button>
                            </div>
                        </Link>
                        <div className="">
                            <h6 className="text-white text-sm md:text-base font-semibold">
                                توضیحات:
                            </h6>
                            <p className={`${iranYekanFont.variable} font-iranYekan text-xs sm:text-sm text-textcolor`}>
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}