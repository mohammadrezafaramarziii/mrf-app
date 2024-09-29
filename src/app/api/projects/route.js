import Projects from "@/server/models/projects";
import dbConnect from "@/server/utils/dbConnect";

dbConnect();

export async function GET(request) {
    const projects = await Projects.find({});
    return Response.json({ projects });
}
