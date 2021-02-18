const fs=require('fs');
const rawdata = fs.readFileSync('./voices.json', {encoding:'utf8', flag:'r'});
const speakers = JSON.parse(rawdata).VoiceNames;
fs.writeFileSync('./speakers.json', JSON.stringify(speakers.filter(s => s.VoiceType === "Neural")));