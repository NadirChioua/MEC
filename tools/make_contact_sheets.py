from pathlib import Path
import sys

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
LANG = "fr" if "--lang" in sys.argv and sys.argv[sys.argv.index("--lang") + 1].lower() == "fr" else "ar"
if "--source-dir" in sys.argv:
    QA_DIR = Path(sys.argv[sys.argv.index("--source-dir") + 1]).resolve()
else:
    QA_DIR = ROOT / "tmp" / ("docx_qa_fr" if LANG == "fr" else "docx_qa")
PAGES = sorted(QA_DIR.glob("page-*.png"))

thumb_w = 700
margin = 28
label_h = 34

for group_idx in range(0, len(PAGES), 4):
    group = PAGES[group_idx : group_idx + 4]
    thumbs = []
    for page in group:
        image = Image.open(page).convert("RGB")
        height = round(image.height * thumb_w / image.width)
        image = image.resize((thumb_w, height), Image.Resampling.LANCZOS)
        thumbs.append((page, image))

    cell_h = max(image.height for _, image in thumbs) + label_h
    sheet = Image.new("RGB", (thumb_w * 2 + margin * 3, cell_h * 2 + margin * 3), "#d9dde4")
    draw = ImageDraw.Draw(sheet)
    for idx, (page, image) in enumerate(thumbs):
        col, row = idx % 2, idx // 2
        x = margin + col * (thumb_w + margin)
        y = margin + row * (cell_h + margin)
        draw.text((x, y + 7), page.stem, fill="#111827")
        sheet.paste(image, (x, y + label_h))

    output = QA_DIR / f"contact-{group_idx // 4 + 1:02d}.jpg"
    sheet.save(output, quality=92, optimize=True)
    print(output)
