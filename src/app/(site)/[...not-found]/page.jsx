import Link from "next/link";

export default function NotFoundCustome() {
    return (
        <div className="w-full flex-col gap-4 h-[calc(100vh-79.73px-167.73px-5rem)] lg:h-[calc(100vh-79.73px-167.73px-7rem)] flex justify-center items-center">
            <h2 className="text-xl text-textcolor font-semibold">
                صفحه ای که دنبالش بودی پیدا نشد :((
            </h2>
            <Link href={'/'} className="text-textcolor">
                برو به صفحه اصلی
            </Link>
        </div>
    )
}

export async function generateMetadata() {
    return {
        title: "صفحه 404 | محمدرضا فرامرزی، برنامه نویس فرانت اند",
        description: "صفحه مورد نظر یافت نشد | 404"
    }
}
