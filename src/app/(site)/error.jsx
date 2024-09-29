'use client'

import Image from 'next/image'

export default function Error({ error, reset }) {

    return (
        <div className="w-full h-[calc(100vh-79.73px-167.73px-5rem)] lg:h-[calc(100vh-79.73px-167.73px-7rem)] flex flex-col justify-center items-center">

            <h2 className="text-xl text-textcolor font-semibold mb-3">در دریافت اطلاعات خطایی به وجود اومده</h2>

            <div>
                <button onClick={() => reset()} className="w-full !text-sm btn btn--primary">
                    تلاش مجدد
                </button>
            </div>

        </div>
    )
}