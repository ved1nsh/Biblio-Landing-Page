const fs = require('fs');

const files = [
  'app/research/sections/ResearchIntroSection.tsx',
  'app/research/sections/MarketOverviewSection.tsx',
  'app/research/sections/ProblemObjectiveSection.tsx',
  'app/research/sections/StrategicGapSection.tsx',
  'app/research/BiblioVsOthersSection.tsx',
  'app/research/PainPointsSection.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/py-16 text-black md:px-10 md:py-24/g, 'py-8 text-black md:px-10 md:py-16');
    content = content.replace(/py-20 text-white md:px-10 md:py-28/g, 'py-10 text-white md:px-10 md:py-20');
    content = content.replace(/py-20 md:px-10 md:py-28/g, 'py-10 md:px-10 md:py-20');
    fs.writeFileSync(f, content);
  } else {
    console.log("Not found:", f);
  }
});
