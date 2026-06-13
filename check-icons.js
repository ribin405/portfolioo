const l = require('lucide-react');
const keys = Object.keys(l).filter(k => k.toLowerCase().includes('git') || k.toLowerCase().includes('linked'));
console.log(keys.join('\n'));
