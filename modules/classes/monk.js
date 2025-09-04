export default {
  name: 'Monk',
  hitDie: 8,
  babKind: 'avg',
  saves: lvl => ({ fort: 2 + Math.floor(lvl/2), ref: 2 + Math.floor(lvl/2), will: 2 + Math.floor(lvl/2) }),
  skillPoints: 4,
  classSkills: ['Balance','Jump','Tumble','Climb','Listen','Spot'],
  casterProgress: 0.0,
  spellcasting: null,
  bab: lvl => Math.floor(lvl * 0.75)
};
