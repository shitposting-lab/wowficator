// ==UserScript==
// @name        twitter shitpost wow'o'ficator
// @namespace   *.twitter.com
// @include     *
// @version     1
// @grant       none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js 
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
      .replace(/фемин/i, 'рас')
      .replace(/COVID/i, 'мор')
      .replace(/коронавирус/i, 'мор')
      .replace(/радфем/i, "Шестой Дом");
    $(a).html(rep);
  });
}
setInterval(replacer, 1000);
