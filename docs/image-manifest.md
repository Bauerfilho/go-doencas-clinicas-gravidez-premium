# Image manifest · todas as imagens locais

Esta plataforma **não usa hotlink**. Toda imagem é SVG/HTML/CSS gerado localmente, embutido no HTML ou em `assets/svg/`.

## Imagens previstas (todas inline ou em assets/svg/)

### Hero (página 00)
- SVG inline `#heroT` — fluxo materno-fetal completo (gestante → pistas → diagnóstico → gravidade → conduta → parto → gabarito).

### Caso integrador (página 01)
- 4 cards de paciente (CSS puro, sem imagem).

### Bloco 1 (páginas 02–13)
- Árvore diagnóstica SVG · página 02
- Comparador 3 colunas SVG · página 03
- Silhueta de gestante + 5 órgãos SVG · página 04
- Pódio de exames SVG · página 05
- Painel de rastreio em camadas SVG · página 06
- 4 cards SVG (atividade, AAS, cálcio, controvérsia) · página 07
- Semáforo clínico SVG · página 08
- Trio fígado/plaqueta/hemólise SVG · página 09
- Tabela responsiva HTML · página 10
- Bomba infusora SVG + cards Pritchard/Zuspan · página 11
- Stepper de idade gestacional SVG · página 12
- Linha do tempo puerperal SVG · página 13

### Bloco 2 (páginas 14–16)
- Comparador 2 colunas HTML · página 14
- Mapa HCG→tireoide→vômito SVG · página 15
- Pirâmide de conduta SVG · página 16

### Bloco 3 (páginas 17–26)
- Cartão de anamnese HTML · página 17
- Fluxograma diagnóstico SVG · página 18
- Timeline placenta/hormônios SVG · página 19
- Dashboard de glicemias HTML/SVG · página 20
- Mapa UBS/alto risco SVG · página 21
- Escadinha de insulina SVG · página 22
- Régua gestacional SVG · página 23
- Cadeia mãe/feto/RN SVG · página 24
- Pelve simplificada SVG · página 25
- Trilhas pós-parto SVG · página 26

### Bloco 4 (páginas 27–32)
- Comparador zigoto/córion/âmnio SVG · página 27
- Timeline embrionária SVG · página 28
- USG estilizado SVG · página 29
- Cards verdadeiro/falso CSS · página 30
- Régua por corionicidade SVG · página 31
- Placenta com anastomoses SVG · página 32

### Bloco 5 (página 33)
- Memory board com 9 trilhas SVG · página 33

## Política

- Sem URL externa de imagem.
- Sem importação de biblioteca de ícones — SVGs autorais inline em `content-data.js` (dicionário `GO_ICONS`) e em cada seção.
- Fonte tipográfica via `rsms.me/inter` (Inter) e Google Fonts (Manrope/Fraunces).
- Acessibilidade: cada SVG com `<title>` e `<desc>`, e `role="img"` quando aplicável.
