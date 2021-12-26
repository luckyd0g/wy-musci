import request from "@/utils/request"

export const hotSearch = () => request({
    url: "/search/hot"
})
export const searchResult = params => request({
    url: "/cloudsearch",
    params
})