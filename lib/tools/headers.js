const fetch = require("node-fetch");
async function _075x97(e) {
    if (result = {}, !e) throw {
        creator: "Jeje",
        status: 400,
        message: "Parameter Url Tidak Boleh kosong!"
    };
    if (cekurl = /^https?:\/\//.test(e), !cekurl) throw {
        creator: "Jeje",
        status: 400,
        message: "invalid url"
    };
    return hj = await fetch(e), Hed = await hj.headers.raw(), stringify = await JSON.stringify(Hed), parse = await JSON.parse(stringify), Object.entries(parse).map((([e, t]) => {
        result[e] = t[0]
    })), {
        status: hj.status,
        creator: "Jeje",
        result: result
    }
}
module.exports = _075x97.bind();