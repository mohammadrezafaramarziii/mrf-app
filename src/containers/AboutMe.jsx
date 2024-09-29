"use client"
import { GithubIcon, InstagramIcon, LinkedinIcon, TelegramIcon } from "@/common/icons/SocailIcons";
import { iranYekanFont } from "@/constants/localFonts";
import { useGetProfileSite } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
    const { data, isPending } = useGetProfileSite();
    const { profile } = data || {};

    return (
        <div className={`relative duration-200 ${isPending ? "opacity-25 blur-md" : "blur-none opacity-100"}`}>

            <div className="w-full flex flex-col lg:flex-row-reverse lg:items-center gap-10 relative z-20">

                {/* image */}
                <div className="w-full flex justify-center relative z-[70]">
                    <Image
                        src={'/images/header-animate-pic.gif'}
                        alt=""
                        width={335}
                        height={440}
                        priority
                        className="w-full max-w-[500px]"
                    />
                </div>

                {/* about me */}
                <div className="w-full">
                    <h1 className={`text-center lg:text-right font-medium text-white text-3xl lg:text-5xl`}>
                        {profile?.fullName}
                    </h1>
                    <div className="flex justify-center lg:justify-start">
                        <h2 className={`text-center lg:text-right font-bold bg-gradient-to-r from-primary-100 to-primary-300 inline-block text-3xl min-[430px]:text-4xl text-transparent bg-clip-text lg:text-6xl whitespace-nowrap lg:leading-[80px]`}>
                            {profile?.job}
                        </h2>
                    </div>
                    <p className={`${iranYekanFont.variable} text-center lg:text-right font-iranYekan w-full max-w-[500px] max-[1024px]:mx-auto text-xs lg:text-sm text-textcolor leading-[24px] lg:leading-[36px] my-6 lg:my-8`}>
                        {profile?.description}
                    </p>
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4">
                        <a href={`/images/${profile?.resumeFile}`} target="_blank" rel="noopener noreferrer" download className="btn btn--primary">
                            دانلود رزومه
                        </a>
                        <div className="flex items-center gap-3">
                            <Link target="blank" href={'https://t.me/mohammadrezafaramarziii'} className="btn btn--outline-circle">
                                <TelegramIcon className="w-5 h-5" />
                            </Link>
                            <Link target="blank" href={'https://instagram.com/mohammadrezafaramarziii'} className="btn btn--outline-circle">
                                <InstagramIcon className="w-5 h-5" />
                            </Link>
                            <Link target="blank" href={'https://www.linkedin.com/in/mohammadreza--faramarzi/'} className="btn btn--outline-circle">
                                <LinkedinIcon className="w-5 h-5" />
                            </Link>
                            <Link target="blank" href={'https://github.com/mohammadrezafaramarziii'} className="btn btn--outline-circle">
                                <GithubIcon className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>


            <div className="absolute -bottom-16 lg:bottom-5 left-5 z-[60]">
                <Image
                    src={'/images/star-shape.svg'}
                    alt=""
                    width={30}
                    height={30}
                    priority
                    className="-rotate-[30deg]"
                />
            </div>

            <div className="absolute top-8 lg:-top-10 right-5 z-[60]">
                <Image
                    src={'/images/star-shape.svg'}
                    alt=""
                    width={30}
                    height={30}
                    priority
                    className="-rotate-[30deg]"
                />
            </div>

            <div className="absolute top-8 lg:-top-10 left-5">
                <Image
                    src={'/images/circle-shape.svg'}
                    alt=""
                    width={80}
                    height={80}
                    priority
                    className="w-20 h-20 -rotate-[30deg] opacity-40"
                />
            </div>

            <div className="absolute lg:block hidden top-[15%] left-1/3">
                <Image
                    src={'/images/circle-shape.svg'}
                    alt=""
                    width={80}
                    height={80}
                    priority
                    className="w-20 h-20 -rotate-[30deg] opacity-40"
                />
            </div>
        </div>
    )
}