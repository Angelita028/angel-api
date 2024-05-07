const axios = require('axios');
const cheerio = require('cheerio');

async function igdl(url) {
    try {
      const resp = await axios.post("https://saveig.app/api/ajaxSearch", new URLSearchParams({ q: url, t: "media", lang: "id" }), {
        headers: {
          accept: "*/*",
          "user-agent": "PostmanRuntime/7.32.2"
        }
      })
      let result = { status: true, data: [] }
      const $ = cheerio.load(resp.data.data)
      $(".download-box > li > .download-items").each(function () {
        result.data.push($(this).find(".download-items__btn > a").attr("href"))
      })
      return result
    } catch {
      const result = {
        status: false,
        message: "Couldn't fetch data of url"
      }
      console.log(result)
      return result
    }
  }
  
module.exports = igdl.bind()