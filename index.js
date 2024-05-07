const { gempaNow, gempaRealtime, lyricsv2, bioskop, bioskopNow, wallpaper, latinToAksara, aksaraToLatin,} = require("@bochilteam/scraper");
const { version, author, downloader, game, random, search } = require(".");
//Downloader
const facebook = require("./lib/downloader/facebook");
const filmdl = require("./lib/downloader/filmdl");
const igstory = require("./lib/downloader/igstory");
const instagram = require("./lib/downloader/instagram");
const mediafire = require("./lib/downloader/mediafire");
const pindl = require("./lib/downloader/pindl");
const spotify = require("./lib/downloader/spotify");
const tiktok = require("./lib/downloader/tiktok");
const ttslide = require("./lib/downloader/ttslide");
const twitter = require("./lib/downloader/twitter");
const youtube = require("./lib/downloader/youtube");
//Game
const family100 = require("./lib/game/family100");
const siapakahaku = require("./lib/game/siapakahaku");
const { tebakgambar } = require("./lib/game/tebakgambar");
//Random
const { ppcouple } = require("./lib/random/ppcouple");
const quotesanime = require("./lib/random/quotesanime");
//Religion
const alquran = require("./lib/religion/alquran");
const jadwalsholat = require("./lib/religion/jadwalsholat");
const listsurah = require("./lib/religion/listsurah");
const surah = require("./lib/religion/surah");
//Search
const artinama = require("./lib/search/artinama");
const cerpen = require("./lib/search/cerpen");
const chordlagu = require("./lib/search/chordlagu");
const covid = require("./lib/search/covid");
const cuaca = require("./lib/search/cuaca");
const film = require("./lib/search/film");
const freefireid = require("./lib/search/freefireid");
const happymod = require("./lib/search/happymod");
const igstalk = require("./lib/search/igstalk");
const infogempa = require("./lib/search/infogempa");
const { jadwaltv } = require("./lib/search/jadwaltv");
const kusonime = require("./lib/search/kusonime");
const lyrics = require("./lib/search/lyrics");
const persamaankata = require("./lib/search/persamaankata");
const pinsrch = require("./lib/search/pinsrch");
const playstore = require("./lib/search/playstore");
const sfile = require("./lib/search/sfile");
const { textToImage } = require("./lib/search/texttoimg");
const tixid = require("./lib/search/tixid");
const translate = require("./lib/search/translate");
//Tools
const binary = require("./lib/tools/binary");
const encHtml = require("./lib/tools/enc-html");
const iplook = require("./lib/tools/iplook");
const shortlink = require("./lib/tools/shortlink");
const singkatankata = require("./lib/tools/singkatankata");
const subfinder = require("./lib/tools/subfinder");
const uploadFile = require("./lib/tools/uploadFile");
const whois = require("./lib/tools/whois");
const openai = require("./lib/search/openai");
const { Song } = require("soundcloud-scraper");
const soundcloud = require("./lib/downloader/soundcloud");


module.exports = {
    version:version,
    author:author,
    downloader:{
        facebook:facebook,
        filmdl:filmdl,
        igstory:igstory,
        instagram:instagram,
        mediafire:mediafire,
        pindl:pindl,
        soundcloud:soundcloud,
        spotify:spotify,
        tiktok:tiktok,
        ttslide:ttslide,
        twitter:twitter,
        yt:youtube
     },
     game:{
        family100:family100,
        siapakahaku:siapakahaku,
        tebakgambar:tebakgambar
     },
     random:{
        ppcouple:ppcouple,
        quotesanime:quotesanime
     },
     religion:{
        alquran:alquran,
        jadwalsholat:jadwalsholat,
        listsurah:listsurah,
        surah:surah
     },
     search:{
        artinama:artinama,
        bioskop:bioskop,
        bioskopNow:bioskopNow,
        cerpen:cerpen,
        chordlagu:chordlagu,
        covid:covid,
        cuaca:cuaca,
        film:film,
        freefireid:freefireid,
        happymod:happymod,
        igstalk:igstalk,
        infogempa:infogempa,
        gempaNow:gempaNow,
        gempaRealtime:gempaRealtime,
        jadwaltv:jadwaltv,
        kusonime:kusonime,
        lyrics:lyrics,
        lyricsv2:lyricsv2,
        openai:openai,
        persamaankata:persamaankata,
        pinsrch:pinsrch,
        playstore:playstore,
        sfile:sfile,
        textToImage:textToImage,
        tixid:tixid,
        translate:translate,
        wallpaper:wallpaper
     },
     tools:{
      binary:binary,
      encHtml:encHtml,
      iplook:iplook,
      shortlink:shortlink,
      singkatankata:singkatankata,
      subfinder:subfinder,
      uploadFile:uploadFile,
      whois:whois,
      latinToAksara:latinToAksara,
      aksaraToLatin:aksaraToLatin,
     }
}