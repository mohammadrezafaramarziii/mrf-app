import dbConnect from "@/server/utils/dbConnect";
import Profile from "@/server/models/profile";

dbConnect();

export async function GET(request) {
    const profileData = await Profile.find({}).select("-_id -phone -email").lean();
    return Response.json({ profile: profileData[0] });
}
