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
        
        info.push(
            {
                name: keyword,
                level: $(node).find(".level-info2__expedition span").text(),
                style: $(node).find(".game-info__title span").text(),
                
            }
        )  
    });
    console.log(info);
}

parsing('안산디와이');