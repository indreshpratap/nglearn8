import { environment } from "../../environments/environment";

export function getUrl(url) {
    return environment.apiPath + url;
}