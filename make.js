const fs = require('fs');

const docs = [
  { src: 'terms.md', out: 'netbill-terms.json', doc_type: 'terms', title: 'Terms and Conditions', version: '1.0' },
  { src: 'privacy.md', out: 'netbill-privacy.json', doc_type: 'privacy', title: 'Privacy Policy', version: '1.0' },
];

fs.mkdirSync('public/legal', { recursive: true });

for (const d of docs) {
  if (!fs.existsSync(d.src)) {
    console.log('Skip (file nahi mili):', d.src);
    continue;
  }
  const contentMarkdown = fs.readFileSync(d.src, 'utf8');
  const data = {
    software_name: 'NetBill',
    parent_entity: 'Madhava Global',
    doc_type: d.doc_type,
    version: d.version,
    title: d.title,
    contentMarkdown,
  };
  fs.writeFileSync(`public/legal/${d.out}`, JSON.stringify(data, null, 2));
  console.log('Done:', d.out);
}
