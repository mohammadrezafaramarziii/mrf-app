import http from "./httpServices";

export function getProjects(){
    return http.get("/projects").then(({data})=>data).catch((error)=>error)
}
