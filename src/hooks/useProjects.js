import { getProjectById, getProjects } from "@/services/projectService";
import { useQuery } from "@tanstack/react-query";

export const useGetProjects = () => 
    useQuery({
        queryKey:["get-projects"],
        queryFn:getProjects,
        retry:false,
        refetchOnWindowFocus:true
    })
