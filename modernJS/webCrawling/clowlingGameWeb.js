const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async(keyword) => {
    try {
        return await axios.get("https://lostark.game.onstove.com/Profile/Character/" + encodeURI(keyword))
    }catch(err) {
        console.log(err);
    }
}

const parsing = async (keyword) => {
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data);
    const $userInfo = $(".profile-info");
    

    let info = [];
    $userInfo.each((idx, node) => {
        const level = $(node).find(".level-info2__expedition span").text();
        console.log(level);
    });
    
}

parsing('안산디와이');