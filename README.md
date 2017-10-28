# idope-search
 A simple and faster way to search for torrents in idope.se

## Description
Html scraper of [iDope](https://idope.se/). Lets find a list of magnets links by query string. Return ArrayJson as result.
Based on @theroich/torrentz2

### Install

```
npm install idope-search
```

### Search magnet links 
```javascript
var idope = require('idope-search');
idope.search('Ubuntu').then(function (data) {
    console.log(data);
});
/*
 { magnet: 'magnet:?xt=urn:btih:59066769b9ad42da2e508611c33d7c4480b3857b&dn=ubuntu-17.04-desktop-amd64.iso&tr=http%3A%2F%2Ftracker.trackerfix.com:80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com:2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me:2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to:2710%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk:6969%2Fannounce&tr=udp%3A%2F%2Feddie4.nl:6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com:6969&tr=udp%3A%2F%2Fglotorrents.pw:6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.com:1337&tr=udp%3A%2F%2Fp4p.arenabg.ch:1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com:1337&tr=udp%3A%2F%2Ftorrent.gresille.org:80%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl:2710%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.glotorrents.com:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net:1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com:80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org:1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch:1337%2Fannounce',
    name: 'ubuntu-17.04-desktop-amd64.iso',
    size: '1.5 GB',
    peers: '391',
    seeds: '900' },
  { magnet: 'magnet:?xt=urn:btih:40448d478d9203a3919b0900e7fbb9e8748dcdf9&dn=ubuntu-17.10-desktop-amd64.iso&tr=http%3A%2F%2Ftracker.trackerfix.com:80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com:2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me:2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to:2710%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk:6969%2Fannounce&tr=udp%3A%2F%2Feddie4.nl:6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com:6969&tr=udp%3A%2F%2Fglotorrents.pw:6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.com:1337&tr=udp%3A%2F%2Fp4p.arenabg.ch:1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com:1337&tr=udp%3A%2F%2Ftorrent.gresille.org:80%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl:2710%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.glotorrents.com:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net:1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com:80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org:1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch:1337%2Fannounce',
    name: 'ubuntu-17.10-desktop-amd64.iso',
    size: '1.4 GB',
    peers: '378',
    seeds: '869' },
  { magnet: 'magnet:?xt=urn:btih:1488d454915d860529903b61adb537012a0fe7c8&dn=ubuntu-16.04.3-desktop-amd64.iso&tr=http%3A%2F%2Ftracker.trackerfix.com:80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com:2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me:2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to:2710%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk:6969%2Fannounce&tr=udp%3A%2F%2Feddie4.nl:6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com:6969&tr=udp%3A%2F%2Fglotorrents.pw:6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.com:1337&tr=udp%3A%2F%2Fp4p.arenabg.ch:1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com:1337&tr=udp%3A%2F%2Ftorrent.gresille.org:80%2Fannounce&tr=udp%3A%2F%2Ftracker.aletorrenty.pl:2710%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.glotorrents.com:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net:1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org:6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com:80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org:1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.ch:1337%2Fannounce',
    name: 'ubuntu-16.04.3-desktop-amd64.iso',
    size: '1.5 GB',
    peers: '239',
    seeds: '550' },...
*/
