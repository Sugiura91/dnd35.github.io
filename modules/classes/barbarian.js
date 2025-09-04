export default {
  name: 'Barbarian',
  hitDie: 12,
  babKind: 'full',
  // saves: function(level) -> {fort,ref,will}
  saves: lvl => ({ fort: 2 + Math.floor(lvl/2), ref: Math.floor(lvl/3), will: Math.floor(lvl/3) }),
  skillPoints: 4,
  classSkills: ['Intimidate','Climb','Jump','Swim','Survival'],
  casterProgress: 0.0,
  spellcasting: null,
  bab: lvl => Math.floor(lvl * 1.0)
};
