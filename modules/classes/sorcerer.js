export default {
  name: 'Sorcerer',
  hitDie: 4,
  babKind: 'poor',
  saves: lvl => ({ fort: Math.floor(lvl/3), ref: Math.floor(lvl/3), will: 2 + Math.floor(lvl/2) }),
  skillPoints: 2,
  classSkills: ['Bluff','Concentration','Spellcraft','Knowledge (arcana)'],
  casterProgress: 1.0,
  spellcasting: {
    stat: 'cha',
    progression: {
      1:[0,1], // sorcerer slots known/spells per day differ; here we show 1st-level slots as [0,1] meaning 0 level0,1 level1 etc - simplified
      2:[0,2],
      3:[0,2,1],
      4:[0,3,2],
      5:[0,3,3,1],
      6:[0,3,3,2],
      7:[0,4,3,2,1],
      8:[0,4,4,3,2],
      9:[0,4,4,3,3],
      10:[0,4,4,4,3,2],
      11:[0,4,4,4,4,3],
      12:[0,4,4,4,4,4,3],
      13:[0,4,4,4,4,4,4,3],
      14:[0,4,4,4,4,4,4,4,3],
      15:[0,4,4,4,4,4,4,4,4,3],
      16:[0,4,4,4,4,4,4,4,4,4],
      17:[0,4,4,4,4,4,4,4,4,4,3],
      18:[0,4,4,4,4,4,4,4,4,4,4],
      19:[0,4,4,4,4,4,4,4,4,4,4,3],
      20:[0,4,4,4,4,4,4,4,4,4,4,4]
    }
  },
  bab: lvl => Math.floor(lvl * 0.5)
};
