/**
 * Search Movie on lk21
 * @param {string} text Title
 * @return {Promise<string>} Search Movie
 */
axios = require("axios");
cheerio = require("cheerio");

const baseFilmApik = "https://film-apik.online/";

async function film(q) {
    try {
        const {
            data
        } = await axios.get(`${baseFilmApik}?s=${q}`);
        const $ = cheerio.load(data);
        const result = {
            status: true,
            data: []
        };

        $(".search-page > .result-item > article").each(function() {
            result.data.push({
                title: $(this).find(".details > .title > a").text().replace("Nonton Film ", "").split(" Subtitle")[0].split(" Sub")[0],
                rating: $(this).find(".details > .meta > span").text().replace("IMDb ", "").replace("TMDb ", ""),
                thumbnail: $(this).find(".image > div > a > img").attr("src"),
                url: $(this).find(".image > div > a").attr("href"),
                synopsis: $(this).find(".details > .contenido > p").text(),
            });
        });

        if (result.data.length === 0) {
            return {
                status: false,
                message: "Couldn't find the movie you're looking for"
            };
        }

        return result;
    } catch (error) {
        console.error(error);
        return {
            status: false,
            message: "An error occurred"
        };
    }
};

module.exports = film.bind();