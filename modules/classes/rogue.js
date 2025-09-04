export default {
  name: 'Rogue',
  hitDie: 6,
  babKind: 'avg',
  saves: lvl => ({ fort: Math.floor(lvl/3), ref: 2 + Math.floor(lvl/2), will: Math.floor(lvl/3) }),
  skillPoints: 8,
  classSkills: ['Hide','Move Silently','Open Lock','Disable Device','Search','Hide'],
  casterProgress: 0.0,
  spellcasting: null,
  bab: lvl => Math.floor(lvl * 0.75)
};
