// ==UserScript==
// @name        Twitter Shitpost2WOW Replacer
// @version     2020.10.22
// @description Replace shitposts in Twitter to WOW terms
// @match       *.twitter.com
// @icon        https://www.google.com/s2/favicons?domain=twitter.com
// @author      Shitposting-Lab
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js 
// @supportURL  https://github.com/shitposting-lab/wowficator/issues
// @updateURL   https://github.com/shitposting-lab/wowficator/raw/main/wowficator-wow.user.js
// @downloadURL https://github.com/shitposting-lab/wowficator/raw/main/wowficator-wow.user.js
// ==/UserScript==

var replacer = function() {
	$('article').each ( (i, a) => {
		var rep = $(a).html()
			.replace ( /(радфем|феминизм)/i, "Лок'тар" )
			.replace ( /феминист/i, "шаман" )
			.replace ( /фем/i, "тролль" )

			.replace ( /баб/i, "лучниц" )
			.replace ( /никсельпиксель/i, "сильвана" )
			.replace ( /девушка/i, "ночной эльф" )
			.replace ( /девушк/i, "эльфийк" )
			.replace ( /женск/i, "эльфийск" )
			.replace ( /([\s?+|\.?+|,?])(дев|женщин)([\s?+|\.?+|,?])/ig, "$1ночных эльфов$3" )
			.replace ( /(дев|женщин)/i, "ночных эльфов" )

			.replace ( /бьюти/i, "некро" )
			.replace ( /порно/i, "проклятия" )
			.replace ( /проституция/i, "золотые рудники" )
			.replace ( /сексуализация/i, "обращение в нежить" )
			.replace ( /сексуальн/i, "некротичн" )
			.replace ( /аборты/i, "заклинания" )

			.replace ( /гетеро/i, "гоблин" )
			.replace ( /транс/i, "грифон" )
			.replace ( /интерсек/i, "Тралл" )
			.replace ( /([\s?+|\.?+|,?])би([\s?+|\.?+|,?])/ig, "$1тролль$2" )
			.replace ( /бисексуал/i, "тролль" )

			.replace ( /парни/i, "таурены" )
			.replace ( /парень/i, "таурен" )
			.replace ( /мужчины/i, "орки" )
			.replace ( /мужчин/i, "орков" )
			.replace ( /мужик/i, "орк" )

			.replace ( /абьюзер/i, "дворф" )
			.replace ( /гендерн/i, "расов" )
			.replace ( /двачер/i, "лордерон" )
			.replace ( /мизогин/i, "некромант" )
			.replace ( /насильник/i, "паладин" )
			.replace ( /маскулинность/i, "шаманизм" )

			.replace ( /президент/i, "император" )
			.replace ( /патриархат/i, "Альянс" )
			.replace ( /патриарх/i, "матриарх" )
			.replace ( /(рус|россий)ских/i, "ордынских" )
			.replace ( /наркоман/i, "некромант" )
			.replace ( /война/i, "джихад" )
			.replace ( /сепара[т|ц]/i, "демон" );
		$(a).html(rep);
	} );
}
setInterval ( replacer, 1000 );
