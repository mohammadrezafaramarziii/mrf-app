import http from "./httpServices";

export function getSkills(){
    return http.get("/skills").then(({data})=>data).catch((error)=>error)
}

