function make(e) {
    hexEncoded = "";
    for (var n = 0; n < e.length; n++) hexEncoded += "%" + e.charCodeAt(n).toString(16);
    return hexEncoded
}
module.exports = function (e) {
    return response = `\n<noscript>Please Enable Javascript To View This Page</noscript>\n<script>\n// Encrypt HTML By https://www.npmjs.com/package/Jeje-api\ndocument.write(unescape(${JSON.stringify(make(e))}))\n<\/script>\n`.trim()
}.bind();