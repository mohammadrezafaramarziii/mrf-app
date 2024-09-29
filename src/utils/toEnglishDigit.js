export function toEnglishDigit(number){
    let numToString = String(number);
    let convertedNum = numToString.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));

    return convertedNum;
}