import TextArea from "@/common/TextArea";
import TextField from "@/common/TextField";
import { MailIcon, PhoneIcon } from "@/common/icons/BrokenIcon";
import { GithubIcon, InstagramIcon, LinkedinIcon, TelegramIcon } from "@/common/icons/SocailIcons";
import { iranYekanFont } from "@/constants/localFonts";
import { toPersianDigit } from "@/utils/toPersianDigit";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full mt-20 bg-primary-400/5">

            <div className="py-6 flex flex-col items-center gap-4 container mx-auto">
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

                <ul className="flex items-center gap-8 text-textcolor">
                    <li>
                        <Link target="blank" href={'https://t.me/mohammadrezafaramarziii'}>
                            <TelegramIcon className="w-6 h-6" />
                        </Link>
                    </li>
                    <li>
                        <Link target="blank" href={'https://instagram.com/mohammadrezafaramarziii'}>
                            <InstagramIcon className="w-6 h-6" />
                        </Link>
                    </li>
                    <li>
                        <Link target="blank" href={'https://www.linkedin.com/in/mohammadreza--faramarzi/'}>
                            <LinkedinIcon className="w-6 h-6" />
                        </Link>
                    </li>
                    <li>
                        <Link target="blank" href={'https://github.com/mohammadrezafaramarziii'}>
                            <GithubIcon className="w-6 h-6" />
                        </Link>
                    </li>
                </ul>

                <p className={`text-white text-center`}>
                    ساخته شده توسط محمدرضا فرامرزی
                </p>
            </div>

        </footer>
    )
}