/**
 * Criado por Adriel Mendes 28/10/2017
 */

const thenfunc = require('q');
const request = require('request');
const cheerio = require('cheerio');

exports.search = function (searchStr) {
    const defr = thenfunc.defer();
	var result = [];
	const option = {url: 'https://googleweblight.com/?lite_url=https://idope.se/torrent-list/' + encodeURIComponent(searchStr) + '/&re=1&ts=1509214421&sig=ANTY_L2omWptMnPz5MB3heFNsHbrgDf5Gw'};
	request(option, function (err, resp, html) {
		var $ = cheerio.load(html);
		var elems = $('div[id=a-div2]').find('a'), count = elems.length;
		var trackers = "&tr=http%3A%2F%2Ftracker.trackerfix.com:80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com:2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me:2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to:2710%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk:6969%2Fannounce&tr=udp%3A%2F%2Feddie4.nl:6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com:6969&tr=udp%3A%2F%2Fglotorrents.pw:6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.com:1337&tr=udp%3A%2F%2Fp4p.arenabg.ch:1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com:1337&tr=udp%3A%2F%2Ftorrent.gresille.org:80%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl:2710%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.glotorrents.com:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net:1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com:80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org:1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch:1337%2Fannounce";
		elems.each(function () {
			var hash = $(this).attr('href').split('/');
			var a = (hash.length - 2);
			var hash = hash[a];
			var name = $(this).find('.resultdivtopname').text();
			var size = $(this).find('.resultdivbottonlength').text();
			var seeds = $(this).find('.resultdivbottonseed').text();
			var peers = String(Math.round(seeds / 2.3));
			var magnet = "magnet:?xt=urn:btih:" + hash + "&dn=" + encodeURIComponent(name) + trackers;
			result.push({magnet, name, size, peers, seeds});
			if (!--count)
				defr.resolve(result);
		});

	});
	return defr.promise;
};
