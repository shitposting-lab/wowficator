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
    	.replace('феминизм', 'альянссосатт')
      .replace('феминистки', 'ордынцы')
      .replace(/наркоман/i, "некромант")
      .replace('радфем', "Лок'Тар")
      .replace('никсельпиксель','сильвана')
      .replace('баб','лучниц')
      .replace(/транс/i, "грифон")
      .replace('война', "джихад")
      .replace('президент', "император")
      .replace('патриарх', "матриарх")
      .replace('женщин', "ночных эльфов")
      .replace(/проституция/i, "золотые рудники")
      .replace('сексуализация', "обращение в нежить")
      .replace('парни', "таурены")
      .replace('мужчины', "орки")
      .replace('интерсек', "тролли")
      .replace('русских', "ордынских")
      .replace('российских', "ордынских")
      .replace('фем', "тролль")
      .replace('мужчин', "орков")
      .replace('мужик', "орк")
      .replace(/парень/i, "таурен")
      .replace('девушкам', "эльфийкам")
      .replace(/девушка/i, "ночной эльф")
      .replace('маскулинность', "шаманизм")
      .replace(/сексуальн/i, 'некротичн')
      .replace('бьюти', "некро")
      .replace('порно', "проклятия")
      .replace('Аборты', "Заклинания")
      .replace(/абьюзер/i, 'дворф')    
      .replace(/гетеро/i, 'гоблин')
      .replace(/([\s?+|\.?+|,?])би([\s?+|\.?+|,?])/ig, '$1тролль$2')
      .replace(/бисексуал/i, 'тролль')
      .replace(/гендерн/i, 'расов')
      .replace(/([\s?+|\.?+|,?])дев([\s?+|\.?+|,?])/ig, '$1орков$2')
      .replace(/дев/i, 'орк')
      .replace(/двачер/i, 'лордерон')
      .replace(/([\s?+|\.?+|,?])женщин([\s?+|\.?+|,?])/ig, '$1орков$2')    
      .replace(/женщин/i, 'орк')
      .replace(/женские/i, 'орочьи')
      .replace(/интерсек/i, 'Тралл')
      .replace(/мизогин/i, 'некромант')    
      .replace(/насильник/i, 'паладин')    
      .replace(/патриархат/i, 'Альянс')
      .replace(/сепарат/i, 'демон')
      .replace(/сепарац/i, 'демон')
      .replace(/феминизм/i, "Лок'тар")
      .replace(/феминист/i, 'шаман')    
      .replace(/радфем/i, "за Орду");
    $(a).html(rep);
  });
}
setInterval(replacer, 1000);
