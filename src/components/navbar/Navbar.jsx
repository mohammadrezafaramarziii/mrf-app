"use client"
import { EmailIcon, LocationIcon, MenuIcon, PhoneIcon } from "@/common/icons/BoldIcons";
import { GithubIcon, InstagramIcon, LinkedinIcon, TelegramIcon } from "@/common/icons/SocailIcons";
import { toPersianDigit } from "@/utils/toPersianDigit";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { DownloadIcon } from "@/common/icons/BrokenIcon";
import { useGetProfileSite } from "@/hooks/useAuth";

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const menu = [
        { label: "درباره من", link: "/" },
        { label: "مهارت ها", link: "/#skills" },
        { label: "پروژه ها", link: "/projects" },
        { label: "ارتباط با من", link: "/#callme" }
    ];
    const { data, isPending } = useGetProfileSite();
    const { profile } = data || {};

    return (

        <>
            <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)} menu={menu} />

            <nav className="w-full sticky top-0 right-0 z-[80]">
                <div className="w-full flex bg-background/70 backdrop-blur items-center justify-between container mx-auto py-5 lg:py-8 px-6 lg:px-10">

                    <div className="flex items-center gap-6">

                        {/* side bar button */}
                        <div className="flex lg:hidden">
                            <button onClick={() => setShowSidebar(true)} className="btn">
                                <MenuIcon className="w-6 h-6 text-textcolor" />
                            </button>
                        </div>

                        {/* logo */}
                        <div className="hidden lg:block">
                            <Link href={'/'}>
                                <Image
                                    src={'/images/logo.svg'}
                                    alt="logo"
                                    width={1000}
                                    height={1000}
                                    priority
                                    className="w-[50px]"
                                />
                            </Link>
                        </div>

                        {/* menu */}
                        <div className="hidden lg:block">
                            <ul className="flex item gap-6 text-textcolor text-sm">
                                {menu.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link href={item.link}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <Link href={'/'}>
                            <Image
                                src={'/images/logo.svg'}
                                alt="logo"
                                width={1000}
                                height={1000}
                                priority
                                className="w-[50px]"
                            />
                        </Link>
                    </div>


                    {/* download button */}
                    <div className="hidden lg:block">

                        <a href={`/images/${profile?.resumeFile}`} target="_blank" rel="noopener noreferrer" download className="btn btn--primary">
                            <DownloadIcon className="w-5 h-5" />
                            دانلود رزومه
                        </a>
                    </div>
                    <div className="lg:hidden">
                        <a href={`/images/${profile?.resumeFile}`} target="_blank" rel="noopener noreferrer" download className="btn text-textcolor">
                            <DownloadIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}