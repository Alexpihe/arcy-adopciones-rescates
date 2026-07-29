from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys

ROOT = Path(__file__).resolve().parents[1]
HTML_FILES = sorted(ROOT.glob('*.html'))

class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.ids = set()
    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        if 'id' in data:
            self.ids.add(data['id'])
        for key in ('href', 'src'):
            if key in data:
                self.links.append((tag, key, data[key]))

parsed = {}
errors = []
for html in HTML_FILES:
    p = Parser()
    p.feed(html.read_text(encoding='utf-8'))
    parsed[html.name] = p

for html in HTML_FILES:
    parser = parsed[html.name]
    for tag, attr, raw in parser.links:
        if not raw or raw.startswith(('http://', 'https://', 'mailto:', 'tel:', 'data:', 'javascript:')):
            continue
        parts = urlsplit(raw)
        path = unquote(parts.path)
        fragment = parts.fragment
        target = (html.parent / path).resolve() if path else html.resolve()
        try:
            target.relative_to(ROOT.resolve())
        except ValueError:
            errors.append(f'{html.name}: ruta fuera del proyecto: {raw}')
            continue
        if not target.exists():
            errors.append(f'{html.name}: recurso inexistente: {raw}')
            continue
        if fragment and target.suffix.lower() == '.html':
            target_parser = parsed.get(target.name)
            if target_parser and fragment not in target_parser.ids:
                errors.append(f'{html.name}: ancla inexistente: {raw}')

required = ['index.html', 'nosotros.html', 'adoptables.html', 'eventos.html', 'contacto.html', 'netlify.toml']
for item in required:
    if not (ROOT / item).exists():
        errors.append(f'Falta archivo requerido: {item}')

if errors:
    print('\n'.join(errors))
    sys.exit(1)
print(f'OK: {len(HTML_FILES)} páginas y enlaces locales verificados.')
