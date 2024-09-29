import { CloseIcon, EmailIcon, LocationIcon, PhoneIcon } from "@/common/icons/BoldIcons";
import { GithubIcon, InstagramIcon, LinkedinIcon, TelegramIcon } from "@/common/icons/SocailIcons";
import { toPersianDigit } from "@/utils/toPersianDigit";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ show, onClose, menu }) {
    return (
        <>
            <div onClick={onClose} className={`${show ? "block" : "hidden"} lg:!hidden w-full h-full fixed top-0 right-0 bg-dark/30 backdrop-blur-sm z-[90]`}></div>

            <aside className={`${show ? "translate-x-0" : "translate-x-full"} overflow-y-auto w-full fixed top-0 right-0 max-w-[300px] duration-200 lg:hidden h-full bg-background z-[90]`}>

                <div className="absolute top-5 left-5">
                    <button onClick={onClose} className="btn text-textcolor">
                        <CloseIcon className="w-4 h-4" />
                    </button>
                </div>

                <div className="w-full h-full p-6 pt-10">
                    <div className="w-full flex justify-center">
                        <Image
                            src={'/images/logo.svg'}
                            alt="logo"
                            width={1000}
                            height={1000}
                            priority
                            className="w-[70px]"
                        />
                    </div>

                    <div className="mt-12 mb-6 border-t border-white/10 pt-4">
                        <h5 className="text-xs text-primary-400 mb-5">
                            منو
                        </h5>
                        <ul className="flex flex-col gap-6 text-textcolor text-sm">
                            {menu.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link href={item.link} onClick={onClose}>
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="w-full">
                        <h5 className="text-xs text-primary-400 mb-5">
                            شبکه های اجتماعی
                        </h5>
                        <ul className="flex flex-col gap-4 text-textcolor">
                            <li>
                                <Link target="blank" href={'https://t.me/mohammadrezafaramarziii'} className="flex flex-row-reverse text-sm justify-end items-center gap-3">
                                    تلگرام
                                    <TelegramIcon className="w-5 h-5" />
                                </Link>
                            </li>
                            <li>
                                <Link target="blank" href={'https://instagram.com/mohammadrezafaramarziii'} className="flex flex-row-reverse text-sm justify-end items-center gap-3">
                                    اینستاگرام
                                    <InstagramIcon className="w-5 h-5" />
                                </Link>
                            </li>
                            <li>
                                <Link target="blank" href={'https://www.linkedin.com/in/mohammadreza--faramarzi/'} className="flex flex-row-reverse text-sm justify-end items-center gap-3">
                                    لینکدین
                                    <LinkedinIcon className="w-5 h-5" />
                                </Link>
                            </li>
                            <li>
                                <Link target="blank" href={'https://github.com/mohammadrezafaramarziii'} className="flex flex-row-reverse text-sm justify-end items-center gap-3">
                                    گیت هاب
                                    <GithubIcon className="w-5 h-5" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </aside>
        </>
    )
}