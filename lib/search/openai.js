const axios = require("axios")
const cheerio = require("cheerio")

async function openai(text) {
  try {
    const { data } = await axios.get(`https://chatgptt.me/`)
    let $ = cheerio.load(data)
    const nonce = $("#content > div > div.elementor.elementor-22 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-c0189f2.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div.elementor-element.elementor-element-e68c8b6.elementor-widget.elementor-widget-shortcode > div > div > div").attr("data-nonce")
    const params = new URLSearchParams({ _wpnonce: nonce, post_id: 22, url: "https://chatgptt.me", action: "wpaicg_chat_shortcode_message", message: text, bot_id: 0 })
    const dataa = await axios.post(`https://chatgptt.me/wp-admin/admin-ajax.php`, params)
    return dataa.data
  } catch (err) {
    console.log(err.response.data)
    return err.response.data.message
  }
}

module.exports = openai.bind()