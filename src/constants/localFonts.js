import LocalFont from "next/font/local";

const morabbaFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/morabba/Morabba-Regular.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../../public/fonts/morabba/Morabba-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/morabba/Morabba-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-morabba",
  style: "normal",
  display: "block",
});

export default morabbaFont;

export const iranYekanFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/iran-yekan/IRANYekanMobileRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iran-yekan/IRANYekanMobileBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iran-yekan",
  style: "normal",
  display: "block",
});
