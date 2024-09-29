import http from "./httpServices";

export function sendMessage(data){
    return http.post("/message/create", data).then(({data})=>data).catch((error)=>error)
}


