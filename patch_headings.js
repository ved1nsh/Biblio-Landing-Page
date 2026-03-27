const fs = require('fs');

const renames = [
  { f: 'app/research/sections/ResearchIntroSection.tsx', old: /text-\[56px\]/g, new: 'text-[44px]' },
  { f: 'app/research/sections/MarketOverviewSection.tsx', old: /text-\[52px\]/g, new: 'text-[44px]' },
  { f: 'app/research/sections/ProblemObjectiveSection.tsx', old: /text-\[52px\]/g, new: 'text-[44px]' },
  { f: 'app/research/sections/StrategicGapSection.tsx', old: /text-\[48px\]/g, new: 'text-[44px]' }
];

renames.forEach(({f, old, new: repl}) => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(old, repl);
    fs.writeFileSync(f, content);
  }
});
