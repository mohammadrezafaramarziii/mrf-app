"use client"
import { iranYekanFont } from "@/constants/localFonts";
import { useGetSkills } from "@/hooks/useSkills";
import { toPersianDigit } from "@/utils/toPersianDigit";
import Image from "next/image";

export default function Skills() {
    const { data, isPending } = useGetSkills();
    const { skills } = data || {};

    return (
        <section id="skills" className={`w-full duration-200 ${isPending ? "opacity-25 blur-md" : "blur-none opacity-100"}`}>
            <div className="mb-6 flex flex-col items-center gap-4">
                <h4 className={`title-box`}>
                    مهارت های من
                </h4>
                <p className={`${iranYekanFont.variable} font-iranYekan text-sm text-textcolor`}>
                    و همچنان در جستجوی دانش های جدید در دنیای تکنولوژی...
                </p>
            </div>

            <div className="w-full flex flex-wrap gap-6 items-center justify-center mx-auto">
                {!isPending && skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                        <div className="px-6 pt-4 pb-6 flex flex-col items-center gap-2 bg-dark/30 border-2 border-transparent rounded-3xl hover:bg-dark/60 hover:border-primary-100 duration-200">
                            <div>
                                <Image
                                    src={`/images/${skill.icon}`}
                                    alt={skill.name}
                                    width={1000}
                                    height={1000}
                                    priority
                                    className="w-[100px]"
                                />
                            </div>
                            <div className="text-xl font-extrabold text-primary-400">
                                {toPersianDigit(`${skill.level} %`)}
                            </div>
                        </div>
                        <h5 className="text-textcolor">
                            {skill.name}
                        </h5>
                    </div>
                ))}
            </div>
        </section>
    )
}