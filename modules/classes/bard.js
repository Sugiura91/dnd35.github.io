// Bard: partial/variable: in SRD Bard is a 3/4 BAB (avg) and a full (or near full) spontaneous caster via Charisma
export default {
  name: 'Bard',
  hitDie: 6,
  babKind: 'avg',
  saves: lvl => ({ fort: Math.floor(lvl/3), ref: 2 + Math.floor(lvl/2), will: 2 + Math.floor(lvl/2) }),
  skillPoints: 6,
  classSkills: ['Perform','Diplomacy','Use Magic Device','Bluff','Hide','Move Silently'],
  casterProgress: 1.0, // treated as full caster for spells known/slots in SRD terms
  spellcasting: {
    stat: 'cha',
    progression: {
      // simplified but complete-ish typical Bard table (1..20). Each array = slots per spell level 1..N
      1: [1],
      2: [1,1],
      3: [2,1],
      4: [2,2],
      5: [2,2,1],
      6: [2,2,2],
      7: [3,2,2,1],
      8: [3,3,2,2],
      9: [3,3,3,2,1],
      10:[4,3,3,2,2],
      11:[4,4,3,3,2,1],
      12:[4,4,4,3,3,2],
      13:[4,4,4,4,3,3,1],
      14:[4,4,4,4,4,3,2],
      15:[4,4,4,4,4,4,2,1],
      16:[4,4,4,4,4,4,3,2],
      17:[4,4,4,4,4,4,4,3,1],
      18:[4,4,4,4,4,4,4,4,2],
      19:[4,4,4,4,4,4,4,4,3,1],
      20:[4,4,4,4,4,4,4,4,4,3]
    }
  },
  bab: lvl => Math.floor(lvl * 0.75)
};
