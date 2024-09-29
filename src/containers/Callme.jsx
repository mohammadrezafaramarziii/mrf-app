"use client"
import TextArea from "@/common/TextArea";
import TextField from "@/common/TextField";
import { MailIcon, PhoneIcon } from "@/common/icons/BrokenIcon";
import { iranYekanFont } from "@/constants/localFonts";
import { sendMessage } from "@/services/messagesService";
import { toEnglishDigit } from "@/utils/toEnglishDigit";
import { toPersianDigit } from "@/utils/toPersianDigit";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import { useFormik } from "formik";
import Link from "next/link";
import toast from "react-hot-toast";
import * as Yup from "yup";


const validationSchema = Yup.object({
    firstName: Yup.string()
        .required("لطفا نام کوچیکت رو وارد کن")
        .min(3, "نام کوچیک باید حداقل 3 حرف باشه"),

    lastName: Yup.string()
        .required("لطفا نام خانوادگیت رو وارد کن")
        .min(3, "نام خانوادگی باید حداقل 3 حرف باشه"),

    phoneNumber: Yup.string()
        .required("لطفا شماره موبایلت رو وارد کن")
        .matches(/^09\d{9}$/, "شماره موبایلت اشتباه ست"),

    message: Yup.string()
        .required("پیامت رو بنویس")
        .max(240, "پیامت باید حداکثر 240 کاراکتر باشه"),
})

export default function Callme() {
    const { mutateAsync, isPending } = useMutation({ mutationFn: sendMessage });

    const sendMessageHandler = async () => {
        const { message } = await mutateAsync(formik.values);
        if (message) {
            toast(message,
                {
                    icon: '👏',
                    style: {
                        borderRadius: '999px',
                        background: '#333',
                        color: '#fff',
                        border: "2px red solid"
                    },
                }
            );
            formik.setFieldValue("firstName", "");
            formik.setFieldValue("lastName", "");
            formik.setFieldValue("phoneNumber", "");
            formik.setFieldValue("message", "");
        }
    }

    const formik = useFormik({
        initialValues: { firstName: "", lastName: "", phoneNumber: "", message: "" },
        onSubmit: sendMessageHandler,
        validationSchema,
        validateOnMount: true
    })

    return (
        <section id="callme">
            <div className="mb-6 flex flex-col items-center gap-4">
                <h4 className={`title-box`}>
                    ارتباط با من
                </h4>
                <p className={`${iranYekanFont.variable} font-iranYekan text-center text-sm text-textcolor`}>
                    اگه انتقاد، پیشنهاد یا صحبتی داشتی میتونی از طریق فرم زیر برام بفرستی!
                </p>
            </div>

            <div className="flex flex-col items-center gap-3 mb-6 ">
                <div className="flex items-center gap-2 text-textcolor text-sm">
                    <MailIcon className="w-5 h-5" />
                    <Link href={"mailto:mf575583@gmail.com"}>
                        {toPersianDigit("mf575583@gmail.com")}
                    </Link>
                </div>
                <div className="flex items-center gap-2 text-textcolor text-sm">
                    <PhoneIcon className="w-5 h-5" />
                    <Link href={"tel:989365456309"}>
                        {toPersianDigit("09365456309")}
                    </Link>
                </div>
            </div>

            <div className="w-full space-y-4 max-w-lg mx-auto">
                <TextField placeholder={'نام'} name="firstName" formik={formik} />
                <TextField placeholder={'نام خانوادگی'} name="lastName" formik={formik} />
                <TextField
                    placeholder={'شماره موبایل'}
                    name="phoneNumber"
                    formik={formik}
                    onChange={({ target }) => {
                        formik.setFieldValue("phoneNumber", toEnglishDigit(target.value));
                    }}
                />
                <TextArea placeholder={'پیام خود را بنویسید...'} name="message" formik={formik} />
                {
                    !isPending ?
                        <button type="submit" onClick={formik.handleSubmit} className="w-full btn btn--primary">
                            ارسال
                        </button>
                        :
                        <div className="w-full btn btn--primary hover:scale-100 hover:!outline-none">
                            <Spinner color="pink" aria-label="Medium sized spinner example" size="md" />
                        </div>
                }

            </div>
        </section>
    )
}