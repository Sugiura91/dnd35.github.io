export default {
  name: 'Druid',
  hitDie: 8,
  babKind: 'avg',
  saves: lvl => ({ fort: 2 + Math.floor(lvl/2), ref: Math.floor(lvl/3), will: 2 + Math.floor(lvl/2) }),
  skillPoints: 4,
  classSkills: ['Survival','Handle Animal','Knowledge (nature)','Spot','Listen'],
  casterProgress: 1.0,
  spellcasting: {
    stat: 'wis',
    progression: (function(){ // reuse cleric-like table to be complete
      const p = {};
      const sample = {
        1:[3,1],2:[4,2],3:[4,2,1],4:[5,3,2],5:[5,3,2,1],6:[6,4,3,2,1],
        7:[6,4,3,3,2,1],8:[6,5,4,3,3,2,1],9:[6,5,4,4,3,3,2,1],10:[6,5,4,4,4,3,3,2,1],
        11:[6,5,5,4,4,4,3,3,2,1],12:[6,5,5,5,4,4,4,3,3,2,1],13:[6,6,5,5,5,4,4,4,3,3,2,1],
        14:[6,6,5,5,5,5,4,4,4,3,3,2,1],15:[6,6,6,5,5,5,5,4,4,4,3,3,2,1],16:[6,6,6,5,5,5,5,5,4,4,4,3,3,2,1],
        17:[6,6,6,6,5,5,5,5,5,4,4,4,3,3,2,1],18:[6,6,6,6,5,5,5,5,5,5,4,4,4,3,3,2,1],19:[6,6,6,6,6,5,5,5,5,5,5,4,4,4,3,3,2,1],
        20:[6,6,6,6,6,6,5,5,5,5,5,5,4,4,4,3,3,2,1]
      };
      return sample;
    })()
  },
  bab: lvl => Math.floor(lvl * 0.75)
};
