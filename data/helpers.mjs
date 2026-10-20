export const sources = {
  gij: { label: 'Team Taaladvies · gij/ge', url: 'https://www.vlaanderen.be/team-taaladvies/taaladviezen/gij-ge-gebruik' },
  standard: { label: 'Taaladvies · lo standard in Belgio', url: 'https://taaladvies.net/wat-is-standaardtaal-algemeen/' },
  time: { label: 'Taaladvies · voormiddag/namiddag', url: 'https://taaladvies.net/voormiddag-namiddag/' },
  hour: { label: 'Team Taaladvies · hoe laat', url: 'https://www.vlaanderen.be/team-taaladvies/taaladviezen/hoe-laat-om-hoe-laat-om-welk-uur' },
  afternoon: { label: 'Team Taaladvies · vanmiddag', url: 'https://www.vlaanderen.be/team-taaladvies/taaladviezen/deze-middag-vanmiddag-vannamiddag' },
  goesting: { label: 'Canon van Vlaanderen · goesting', url: 'https://www.canonvanvlaanderen.be/events/goesting/' }
};
export const pairs = text => text ? text.split('|').map(pair => {
  const [nl, it] = pair.split('=');
  return { nl: nl.trim(), it: it.trim() };
}) : [];
export function defineUnit(data) {
  const { rules, sentences, ...rest } = data;
  const keywords = typeof data.keywords === 'string' ? pairs(data.keywords) : data.keywords;
  const words = pairs(data.words);
  const grammar = rules.map((r, i) => {
    const [sentence, answer, it, hint, bad1, bad2, note = data.practiceNote, alternatives = []] = r;
    const question = { id: `${data.id}-g${i+1}`, type: i % 2 ? 'mc' : 'fill', prompt: 'Completa la frase.', sentence, answer, answers: [answer, ...alternatives], it, hint, note };
    if (question.type === 'mc') {
      question.options = [{ text: answer, it: `Nella frase: ${it}`, speak: true },
        ...[bad1, bad2].map(value => {
          const [text, meaning] = value.split('~');
          return { text: text.replace(/^!/, ''), it: meaning, speak: !text.startsWith('!') };
        })];
      question.correct = 0;
    }
    return question;
  });
  const mixed = sentences.map((s, i) => {
    const [answer, it, distractor, alternatives = [], note = data.practiceNote] = s;
    const type = i % 2 ? 'tr' : 'order';
    const answers = [answer, ...alternatives];
    const tiles = answer.replace(/[.!?,;:]$/g, '').split(/\s+/).map(text => ({text, speak:true}));
    for (const alt of alternatives) {
      const counts = {};
      for (const text of alt.replace(/[.!?,;:]$/g, '').split(/\s+/)) {
        counts[text.toLowerCase()] = (counts[text.toLowerCase()] || 0) + 1;
        if (tiles.filter(t => t.text.toLowerCase() === text.toLowerCase()).length < counts[text.toLowerCase()]) tiles.push({text,speak:true});
      }
    }
    tiles.push({ text: distractor.replace(/^!/, ''), speak: !distractor.startsWith('!'), distractor:true });
    return { id: `${data.id}-m${i+1}`, type, prompt: type === 'tr' ? 'Traduci con le tessere.' : 'Ricomponi la frase.', it, answer, answers, tiles, note };
  });
  return { ...rest, keywords, words, grammar, mixed, vlaanderen: { text: data.vlaanderen, source: sources[data.source] } };
}
