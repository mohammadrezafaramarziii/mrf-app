import Messages from "@/server/models/messages";
import dbConnect from "@/server/utils/dbConnect";

dbConnect();

export async function POST(request) {
    const { firstName, lastName, phoneNumber, message } = await request.json();
    
    try {
        await Messages.create({firstName, lastName, phoneNumber, message, sendAt:new Date()});
        return Response.json({ message:"پیام شما با موفقیت ارسال شد" },{status:200});
    } catch (error) {
        console.log(error);
        return Response.json({ message:"ارسال پیام موفقیت آمیز نبود" },{status:500});
    }
}