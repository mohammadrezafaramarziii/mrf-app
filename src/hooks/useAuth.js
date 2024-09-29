import { getProfile, getProfileSite } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";


export const useGetProfileSite = () => 
    useQuery({
        queryKey:["get-profile-site"],
        queryFn:getProfileSite,
        retry:false,
        refetchOnWindowFocus:true
    })