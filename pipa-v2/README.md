# 🪁 Estúdio de Pipa

Ferramenta web mobile-first para criar designs de folha de pipa — 132 padrões + 17 bandeiras de seleções.

---

## 📁 Estrutura do projeto

```
pipa-studio/
├── index.html          ← HTML puro (estrutura da página)
├── css/
│   └── style.css       ← Todo o CSS (desktop + mobile)
├── js/
│   ├── kite.js         ← Estado global + geometria da pipa
│   ├── patterns.js     ← Biblioteca de designs (132 padrões)
│   ├── data.js         ← Paletas de cores e dots pré-definidos
│   ├── ui.js           ← Render, galeria, presets, logo, download
│   └── sheet.js        ← Bottom sheet mobile + inicialização
├── split.js            ← Script que gera esses arquivos a partir do monolítico
├── vercel.json         ← Configuração de deploy
└── README.md
```

---

## ➕ Como adicionar um novo padrão

Abra `js/patterns.js` e insira um novo objeto dentro do array `PATTERNS`:

```js
{
  id:   'meu_design',   // string única sem espaços
  name: 'Meu Design',   // nome exibido na galeria
  cat:  'geo',          // categoria (veja abaixo)
  fn: (ctx, w, h, c) => {
    // ctx  = CanvasRenderingContext2D
    // w, h = dimensões do canvas (520 × 620)
    // c    = { bg, c1, c2, c3 } — cores escolhidas pelo usuário

    fill(ctx, w, h, c.bg);        // preenche o fundo
    ctx.fillStyle = c.c1;         // usa cor 1
    ctx.fillRect(0, 0, w, h/2);   // exemplo: retângulo
  }
},
```

### Categorias disponíveis
| cat        | Descrição               |
|------------|-------------------------|
| `cruz`     | Cruzes e grades         |
| `listras`  | Faixas horizontais/verticais |
| `diagonal` | Diagonais e chevrons    |
| `geo`      | Formas geométricas      |
| `especial` | Padrões especiais       |
| `selecoes` | Bandeiras de seleções   |

### Funções auxiliares disponíveis (definidas em `kite.js`)
- `fill(ctx, w, h, cor)` — preenche o canvas inteiro com uma cor
- `withClip(ctx, w, h, fn)` — executa `fn` clipada ao formato da pipa
- `kiteCoords(w, h)` — retorna coordenadas-chave `{ vergH, midBot, bot, ... }`
- `bodyPath(ctx, w, h)` — traça o contorno da folha da pipa

---

## 🌈 Como mudar as paletas aleatórias

Abra `js/data.js` e edite o array `PALETTES`. Cada paleta tem 4 cores:

```js
{ bg:'#0d1b2a', c1:'#f5c518', c2:'#e63946', c3:'#ffffff' },
```

Para adicionar mais cores ao seletor, edite o array `CLRS` no mesmo arquivo.

---

## 🚀 Deploy na Vercel

1. Suba este repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) → **New Project** → importe o repo
3. Clique **Deploy** — a Vercel detecta automaticamente como site estático ✅

---

## 🛠 Tecnologias

- HTML5 + CSS3 + JavaScript vanilla
- Canvas API para renderização dos designs
- Zero dependências de build ou frameworks
