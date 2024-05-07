/**
 * Search Movie on lk21
 * @param {string} text Title
 * @return {Promise<string>} Search Movie
 */
axios = require("axios");
cheerio = require("cheerio");

async function filmdl(url) {
    try {
        const {
            data
        } = await axios.get(`${url}/play`);
        const result = {
            status: true,
            creator: "Wudysoft",
            Url: {},
        };
        const $ = cheerio.load(data);

        $(".box_links #download > .links_table > .fix-table > center > a").each(function() {
            const provider = $(this).text().split(" ")[1];
            const url = $(this).attr("href");
            result.Url[provider] = url;
        });

        if (Object.keys(result.Url).length === 0) {
            return {
                status: false,
                message: "Couldn't find the download link"
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


module.exports = filmdl.bind();