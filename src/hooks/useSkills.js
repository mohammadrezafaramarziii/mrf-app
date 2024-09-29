import { getSkillById, getSkills } from "@/services/skillsService";
import { useQuery } from "@tanstack/react-query";

export const useGetSkills = () => 
    useQuery({
        queryKey:["get-skills"],
        queryFn:getSkills,
        retry:false,
        refetchOnWindowFocus:true
    })
