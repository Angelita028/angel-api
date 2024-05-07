const axios = require('axios')
const fetch = require('node-fetch')

function isUrl(url) {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi))
  }

async function spotify(url) {
    if (!isUrl(url)) throw new Error("Please input Url")
    if (url.includes("spotify.link")) {
      const getOriginalUrl = async () => {
        const data = await fetch(url)
        return data.url
      }
      const originalUrl = await getOriginalUrl(url)
      const track = await axios.get(`https://api.spotifydown.com/metadata/track/${originalUrl.split("track/")[1].split("?")[0]}`, {
        headers: {
          Origin: "https://spotifydown.com",
          Referer: "https://spotifydown.com/"
        }
      })
      const { data } = await axios.get(`https://api.spotifydown.com/download/${track.data.id}`, {
        headers: {
          Origin: "https://spotifydown.com",
          Referer: "https://spotifydown.com/"
        }
      })
      return data
    } else if (url.includes("open.spotify.com")) {
      const { data } = await axios.get(`https://api.spotifydown.com/download/${url.split("track/")[1].split("?")[0]}`, {
        headers: {
          Origin: "https://spotifydown.com",
          Referer: "https://spotifydown.com/"
        }
      })
      return data
    } else {
      const result = {
        status: false,
        message: "Please input valid spotify url"
      }
      console.log(result)
      return result
    }
  }

  module.exports = spotify.bind()