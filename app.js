/**
 * Criado por Adriel Mendes 28/10/2017
 */

const thenfunc = require('q');
const request = require('request');
const cheerio = require('cheerio');

const TRACKER_STR =
  '&tr=http%3A%2F%2Ftracker.trackerfix.com:80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com:2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me:2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to:2710%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk:6969%2Fannounce&tr=udp%3A%2F%2Feddie4.nl:6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com:6969&tr=udp%3A%2F%2Fglotorrents.pw:6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.com:1337&tr=udp%3A%2F%2Fp4p.arenabg.ch:1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com:1337&tr=udp%3A%2F%2Ftorrent.gresille.org:80%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl:2710%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.glotorrents.com:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net:1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com:80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org:1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch:1337%2Fannounce';

const parseHtml = function(html) {
  const $ = cheerio.load(html);
  const parseElement = function(idex, el) {
    const element = $(el);
    const seeds = parseInt(element.find('.resultdivbottonseed').text());
    if (!seeds) return;
    const peers = Math.round(seeds / 2.3);
    const href = element.attr('href').split('/');
    const hash = href[href.length - 2];
    const name = element.find('.resultdivtopname').text();
    const size = element.find('.resultdivbottonlength').text();
    const magnet =
      'magnet:?xt=urn:btih:' +
      hash +
      '&dn=' +
      encodeURIComponent(name) +
      TRACKER_STR;
    return { magnet, name, size, peers, seeds };
  };
  return $('div[id=a-div2]')
    .find('a')
    .map(parseElement)
    .get();
};

const search = function(searchStr) {
  const defr = thenfunc.defer();
  const option = {
    url:
      'https://googleweblight.com/?lite_url=https://idope.se/torrent-list/' +
      encodeURIComponent(searchStr) +
      '/&re=1&ts=1509214421&sig=ANTY_L2omWptMnPz5MB3heFNsHbrgDf5Gw'
  };
  request(option, function(err, resp, html) {
    if (err) {
      defr.reject(err);
    } else {
      defr.resolve(parseHtml(html));
    }
  });
  return defr.promise;
};

module.exports = {
  search,
  parseHtml
};
