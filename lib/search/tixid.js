const axios = require('axios')
const cheerio = require('cheerio')

function TixID() {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                data
            } = await axios.get('https://www.tix.id/tix-now/')
            const $ = cheerio.load(data)
            const hasil = []
            $('div.gt-blog-list > .gt-item').each((i, u) => {
                hasil.push({
                    link: $(u).find('.gt-image > a').attr('href'),
                    image: $(u).find('.gt-image > a > img').attr('data-src'),
                    judul: $(u).find('.gt-title > a').text(),
                    tanggal: $(u).find('.gt-details > ul > .gt-date > span').text(),
                    deskripsi: $(u).find('.gt-excerpt > p').text(),
                })
            })
            resolve(hasil)
        } catch (err) {
            console.error(err)
        }
    })
}

module.exports = TixID.bind()