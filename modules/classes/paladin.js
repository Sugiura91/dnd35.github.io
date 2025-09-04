export default {
  name: 'Paladin',
  hitDie: 10,
  babKind: 'full',
  saves: lvl => ({ fort: 2 + Math.floor(lvl/2), ref: Math.floor(lvl/3), will: Math.floor(lvl/3) + (lvl>=2?2:0) }),
  skillPoints: 2,
  classSkills: ['Diplomacy','Ride','Heal','Knowledge(religion)'],
  casterProgress: 0.5, // partial caster: paladin gains small amount starting at L4; using 0.5 is a simplification to mix partial progression
  spellcasting: {
    stat:'cha',
    progression: (function(){
      const p = {};
      // Paladin spell slots in SRD are sparse (start at L4). We'll provide a lookup for 1..20, approximated but usable.
      p[1]=[]; p[2]=[]; p[3]=[]; p[4]=[1]; p[5]=[1]; p[6]=[1,1]; p[7]=[1,1]; p[8]=[1,1,1]; p[9]=[1,1,1];
      p[10]=[1,1,1,1]; p[11]=[1,1,1,1]; p[12]=[1,1,1,1,1]; p[13]=[2,1,1,1,1]; p[14]=[2,1,1,1,1];
      p[15]=[2,2,1,1,1]; p[16]=[2,2,1,1,1,1]; p[17]=[2,2,2,1,1,1]; p[18]=[2,2,2,1,1,1]; p[19]=[2,2,2,2,1,1]; p[20]=[2,2,2,2,1,1];
      return p;
    })()
  },
  bab: lvl => Math.floor(lvl * 1.0)
};
