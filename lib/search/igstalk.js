const ig = require("instatouch");
const axios = require("axios");
const cheerio = require("cheerio");
const cfg = require("../config");

async function igStalk(username) {
  try {
    const { data, status } = await axios.get(`https://igram.world/api/ig/userInfoByUsername/${username}`, {
      headers: {
        "User-Agent": "PostmanRuntime/7.37.0"
      }
    })
    if (data.result.user.pronouns.length === 0) {
      var pronoun = ""
    } else {
      const splPron = data.result.user.pronouns
      const addSlash = splPron.join("/")
      var pronoun = addSlash
    }
    const res = data.result.user
    const result = {
      status: true,
      creator: "Rintis ID",
      username: res.username,
      fullName: res.full_name,
      followers: res.follower_count,
      following: res.following_count,
      pronouns: pronoun,
      verified: res.is_verified,
      private: res.is_private,
      totalPosts: res.media_count,
      bio: res.biography,
      externalUrl: res.external_url,
      urlAcc: `https://instagram.com/${username}`,
      profilePic: res.hd_profile_pic_url_info.url,
      pkId: res.pk_id
    }
    return result
  } catch (err) {
    result = {
      status: false,
      creator: "Rintis ID",
      message: "Tidak dapat menemukan akun"
    }
    console.log(result)
    return result
  }
}

  

module.exports = igStalk.bind();