import http from "./httpServices";

export function getProfileSite() {
  return http
    .get("/profile/getProfileSite")
    .then(({ data }) => data)
    .catch((error) => error);
}
