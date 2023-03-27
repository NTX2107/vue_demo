import ApiRepository from "@/landing_page/repositories/base/ApiRepository";

const filter = '/filter';
const search = '/search';

export default {
    get() {
        const title = "500 bài code thiếu nhi";
        const author = "NguyenTX";
        const language = "Vietnamese";
        const extension = "books";
        const year = "2020";
        const requestParams = `${filter}` + "?title=" + title + "&author=" + author + "&language=" + language + "&extension=" + extension + "&year=" + year;
        return ApiRepository.get(requestParams)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    find(title?: string, author?: string) {
        const requestParams = `${search}` + "?title=" + title + "&author=" + author;
        return ApiRepository.get(requestParams)
            .then((response) => {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}