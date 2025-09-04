export default {
  name: 'Ranger',
  hitDie: 8,
  babKind: 'full',
  saves: lvl => ({ fort: 2 + Math.floor(lvl/2), ref: 2 + Math.floor(lvl/2), will: Math.floor(lvl/3) }),
  skillPoints: 6,
  classSkills: ['Hide','Move Silently','Listen','Spot','Survival','Handle Animal'],
  casterProgress: 0.5, // partial caster (ranger gains small spell progression starting L4)
  spellcasting: {
    stat: 'wis',
    progression: (function(){
      const p = {};
      // Ranger spells start at level 4 in SRD; provide lookup approximations.
      p[1]=[]; p[2]=[]; p[3]=[]; p[4]=[1]; p[5]=[1]; p[6]=[1,1]; p[7]=[1,1]; p[8]=[1,1,1]; p[9]=[1,1,1];
      p[10]=[1,1,1,1]; p[11]=[1,1,1,1]; p[12]=[1,1,1,1,1]; p[13]=[2,1,1,1,1]; p[14]=[2,1,1,1,1];
      p[15]=[2,2,1,1,1]; p[16]=[2,2,1,1,1,1]; p[17]=[2,2,2,1,1,1]; p[18]=[2,2,2,1,1,1]; p[19]=[2,2,2,2,1,1]; p[20]=[2,2,2,2,1,1];
      return p;
    })()
  },
  bab: lvl => Math.floor(lvl * 1.0)
};
