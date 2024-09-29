import dbConnect from "@/server/utils/dbConnect";
import Skills from "@/server/models/skills";

dbConnect();

export async function GET(request) {
    const skills = await Skills.find({});
    return Response.json({ skills });
}
