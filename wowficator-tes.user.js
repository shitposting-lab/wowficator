// ==UserScript==
// @name        Twitter Shitpost2WOW Replacer
// @version     2020.10.22
// @description Shitpost replacer -- TES version
// @match       https://twitter.com/*
// @icon        https://www.google.com/s2/favicons?domain=twitter.com
// @author      Shitposting-Lab
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @supportURL  https://github.com/shitposting-lab/wowficator/issues
// @updateURL   https://github.com/shitposting-lab/wowficator/raw/main/wowficator-wow.user.js
// @downloadURL https://github.com/shitposting-lab/wowficator/raw/main/wowficator-wow.user.js
// ==/UserScript==
var replacer = function(){
  $('article').each((i,a) => {
    var rep = $(a).html()
    	.replace(/абьюзер/i, 'альтмер')    
      .replace(/гетеро/i, 'Ординатор')
      .replace(/([\s?+|\.?+|,?])би([\s?+|\.?+|,?])/ig, '$1легионер$2')
      .replace(/бисексуал/i, 'легионер')
      .replace(/гендер/i, 'класс')
      .replace(/([\s?+|\.?+|,?])дев([\s?+|\.?+|,?])/ig, '$1мер$2')
      .replace(/девушк/i, 'данмер')
      .replace(/ЖГС/i, 'Азура')   
      .replace(/([\s?+|\.?+|,?])женщин([\s?+|\.?+|,?])/ig, '$1данмеров$2')    
      .replace(/женщин/i, 'данмер')
      .replace(/женс/i, 'эльфий')
      .replace(/лесбиян/i, 'эшлендер')
      .replace(/либер/i, 'даэдр')
      .replace(/мгс/i, 'ЧИМ')    
      .replace(/мизогин/i, 'импер')
      .replace(/муж/i, "н'вах")   
      .replace(/патриарх/i, 'Трибун')
      .replace(/транс/i, 'Телванни')
      .replace(/фемин/i, 'рас')
      .replace(/Путин/i, 'Сота Сил')
      .replace(/Навальный/i, 'Нереварин')
      .replace(/Росси/i, 'Импери')
      .replace(/COVID/i, 'МОР')
      .replace(/коронавирус/i, 'мор')
      .replace(/радфем/i, "Шестой Дом");
    $(a).html(rep);
  });
}
setInterval(replacer, 1000);
