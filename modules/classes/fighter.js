export default {
  name: 'Fighter',
  hitDie: 10,
  babKind: 'full',
  saves: lvl => ({ fort: 2 + Math.floor(lvl/2), ref: Math.floor(lvl/3), will: Math.floor(lvl/3) }),
  skillPoints: 2,
  classSkills: ['Climb','Jump','Ride','Intimidate'],
  casterProgress: 0.0,
  spellcasting: null,
  bab: lvl => Math.floor(lvl * 1.0)
};
