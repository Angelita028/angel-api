const axios = require('axios')
const cheerio = require('cheerio')

const surah = async (surahName) => {
    try {
        surahName = surahName.toLowerCase().replace(/\s/g, '-');
        const {
            data
        } = await axios.get(`https://litequran.net/${surahName}`);
        const $ = cheerio.load(data);
        return $("main > article > ol.surah > li").map((_, element) => ({
            arab: $(element).find("p.arabic").text() || '',
            latin: $(element).find("p.translate").text() || '',
            translate: $(element).find("p.meaning").text() || '',
        })).get();
    } catch (error) {
        console.error(error);
        return {
            error: error.message
        };
    }
};

module.exports =  surah.bind()