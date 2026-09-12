const { chromium } = require('C:/Users/PC/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const path = require('path');

const isFrench = process.argv.includes('--lang') && process.argv[process.argv.indexOf('--lang') + 1] === 'fr';
const qaDir = isFrench ? 'tmp/docx_qa_fr' : 'tmp/docx_qa';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const source = path.resolve(qaDir, 'preview.html').replace(/\\/g, '/');
  await page.goto(`file:///${source}`, { waitUntil: 'networkidle' });
  await page.pdf({
    path: path.join(qaDir, 'preview.pdf'),
    format: 'Letter',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  await browser.close();
  console.log(path.resolve(qaDir, 'preview.pdf'));
})().catch(err => { console.error(err); process.exit(1); });
