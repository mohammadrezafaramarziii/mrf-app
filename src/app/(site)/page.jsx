import AboutMe from "@/containers/AboutMe";
import Callme from "@/containers/Callme";
import Projects from "@/containers/Projects";
import Skills from "@/containers/Skills";
import Image from "next/image";

export default function Home() {
    return (
        <main className="space-y-28 container mx-auto text-white px-6 lg:px-10 py-6 lg:pt-12">
            <AboutMe />
            <Skills />

            <div className="w-full flex justify-center">
                <Image
                    src={'/images/galaxy-lang.svg'}
                    alt=""
                    width={1000}
                    height={1000}
                    priority
                    className="w[200px]"
                />
            </div>

            <Projects />
            <Callme />
        </main>
    )
}