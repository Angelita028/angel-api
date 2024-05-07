const axios = require('axios')
const cheerio = require('cheerio')

async function pindl(url) {
    try {
      const { data } = await axios.get(
        `https://www.savepin.app/download.php?url=${url}&lang=en&type=redirect`
      );
      const $ = cheerio.load(data);
      const result = {
        status: true,
        url: decodeURIComponent(
          $(
            ".download-link > div:nth-child(2) > div > table > tbody >  tr:nth-child(1) > td:nth-child(3) > a"
          )
            .attr("href")
            .split("url=")[1]
        ),
      };
      console.log(result);
      return result;
    } catch (err) {
      result = {
        status: false,
        msg: "Error: Invalid URL!",
      };
      console.log(result);
      return result;
    }
  }

  module.exports = pindl.bind()