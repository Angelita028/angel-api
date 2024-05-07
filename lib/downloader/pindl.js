 const cheerio = require("cheerio") 
 const axios = require("axios") 
 const fetch = require('node-fetch')

 async function pindl(url) {
    return new Promise(async (resolve, reject) => {
        let form = new URLSearchParams()
        form.append('url', url)
        let html = await (await fetch('https://pinterestvideodownloader.com/', {
            method: 'POST',
            body: form
        })).text()
        $ = cheerio.load(html)
        let data = []
        $('table > tbody > tr').each(function(i, e) {
            if ($($(e).find('td')[0]).text() != '') data.push({
                url: $($(e).find('td')[0]).find('a').attr('href')
            })
        })
        if (data.length == 0) return resolve({
            status: false
        })
        resolve({
            status: true,
            data
        })
    })
}

module.exports = pindl.bind();