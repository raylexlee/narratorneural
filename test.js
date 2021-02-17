const fs=require('fs');
const rawdata = fs.readFileSync('./voices.json', {encoding:'utf8', flag:'r'});
const speakers = JSON.parse(rawdata).VoiceNames;
const hkers = speakers.filter(s => /^(en|zh).*Neural$/.test(s.ShortName)).map(s => [s.ShortName, s.LocalName, s.Gender]);
console.log(hkers);
