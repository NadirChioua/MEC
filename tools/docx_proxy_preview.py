from __future__ import annotations

import base64
import html
import re
import sys
from pathlib import Path

from docx import Document
from docx.table import Table
from docx.text.paragraph import Paragraph


ROOT = Path(__file__).resolve().parents[1]
LANG = "fr" if "--lang" in sys.argv and sys.argv[sys.argv.index("--lang") + 1].lower() == "fr" else "ar"
DOCX = ROOT / "output" / "documents" / ("MEC_Finance_Strategie_Marketing_2026_FR.docx" if LANG == "fr" else "MEC_Finance_Marketing_Strategy_2026.docx")
HTML = ROOT / "tmp" / ("docx_qa_fr" if LANG == "fr" else "docx_qa") / "preview.html"
LOGO = ROOT / "public" / "images" / "brand" / "logo-main.png"
AR_RE = re.compile(r"[\u0600-\u06FF]")


def rtl(text: str) -> bool:
    return bool(AR_RE.search(text))


def blocks(parent):
    for child in parent.element.body.iterchildren():
        if child.tag.endswith("}p"):
            yield Paragraph(child, parent)
        elif child.tag.endswith("}tbl"):
            yield Table(child, parent)


def paragraph_html(p: Paragraph) -> str:
    text = p.text.strip()
    if not text:
        return ""
    style = p.style.name if p.style else ""
    direction = "rtl" if rtl(text) else "ltr"
    content = html.escape(text)
    if style == "Title":
        tag = "h1"
    elif style == "Heading 1":
        tag = "h2"
    elif style == "Heading 2":
        tag = "h3"
    elif "List Bullet" in style:
        return f'<p class="bullet" dir="{direction}">• {content}</p>'
    elif "List Number" in style:
        return f'<p class="bullet" dir="{direction}">{content}</p>'
    else:
        tag = "p"
    return f'<{tag} dir="{direction}">{content}</{tag}>'


def table_html(table: Table) -> str:
    parts = ["<table>"]
    for r_idx, row in enumerate(table.rows):
        parts.append("<tr>")
        tag = "th" if r_idx == 0 else "td"
        for cell in row.cells:
            text = "<br>".join(html.escape(p.text.strip()) for p in cell.paragraphs if p.text.strip())
            direction = "rtl" if rtl(text) else "ltr"
            parts.append(f'<{tag} dir="{direction}">{text}</{tag}>')
        parts.append("</tr>")
    parts.append("</table>")
    return "".join(parts)


def main():
    doc = Document(DOCX)
    logo_data = base64.b64encode(LOGO.read_bytes()).decode("ascii")
    body = []
    first = True
    for block in blocks(doc):
        if isinstance(block, Paragraph):
            item = paragraph_html(block)
            if item:
                body.append(item)
        else:
            body.append(table_html(block))
    styles = """
    @page { size: Letter; margin: 18mm 18mm 17mm 18mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #404040; font-family: Arial, 'Noto Sans Arabic', sans-serif; font-size: 10.7pt; line-height: 1.5; }
    .cover { min-height: 225mm; display:flex; flex-direction:column; align-items:center; justify-content:center; page-break-after:always; text-align:center; }
    .cover img { width: 110mm; margin-bottom: 22mm; }
    .cover h1 { font-size: 25pt; margin: 0 0 5mm; color:#000; }
    .cover h3 { font-size: 15pt; color:#001F3F; margin:0; }
    h1 { font-size: 25pt; color:#000; line-height:1.25; }
    h2 { font-size: 18pt; color:#000; margin: 10mm 0 3mm; page-break-after:avoid; }
    h3 { font-size: 14pt; color:#000; margin: 7mm 0 2mm; page-break-after:avoid; }
    p { margin: 0 0 3.2mm; orphans: 3; widows: 3; }
    .bullet { margin-inline-start: 6mm; }
    table { width:100%; border-collapse:collapse; margin:4mm 0 6mm; font-size:8.5pt; page-break-inside:auto; }
    tr { page-break-inside:avoid; }
    th, td { border:0.35mm solid #D9D9D9; padding:2.4mm; vertical-align:middle; }
    th { background:#001F3F; color:#fff; font-weight:700; }
    tr:nth-child(odd) td { background:#F2F6FA; }
    a { color:#001F3F; }
    """
    if LANG == "fr":
        cover = f'''<section class="cover"><img alt="MEC Finance" src="data:image/png;base64,{logo_data}"><h1>Stratégie marketing et plan de contenu de MEC Finance</h1><h3>Étude concurrentielle et plan d'exécution sur 90 jours</h3></section>'''
    else:
        cover = f'''<section class="cover"><img alt="MEC Finance" src="data:image/png;base64,{logo_data}"><h1 dir="rtl">خطة التسويق والمحتوى الرقمي لشركة MEC Finance</h1><h3 dir="rtl">بحث تنافسي واستراتيجية تنفيذ لمدة 90 يوما</h3></section>'''
    # The first four non-empty DOCX paragraphs form the original cover and are replaced by the proxy cover.
    content = "\n".join(body[4:])
    HTML.parent.mkdir(parents=True, exist_ok=True)
    HTML.write_text(f"<!doctype html><html lang='{LANG}'><head><meta charset='utf-8'><style>{styles}</style></head><body>{cover}{content}</body></html>", encoding="utf-8")
    print(HTML)


if __name__ == "__main__":
    main()
