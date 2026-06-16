const fs = require('fs');
const content = fs.readFileSync('src/data/services.ts', 'utf8');
fs.writeFileSync('src/data/services_ar.ts', content);
