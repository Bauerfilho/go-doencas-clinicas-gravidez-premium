# Fallback visuais

Estratégia para garantir que **nenhuma imagem essencial dependa de hotlink**.

## Princípio

Toda imagem indispensável (USG, Doppler, fluxograma, anatomia) deve ser:

1. **SVG autoral inline** no HTML/JS, OR
2. **HTML/CSS puro** (cards, tabelas, gradientes), OR
3. **SVG salvo em `assets/svg/`** se for grande e reusado.

Asset remoto não é aceitável para componente crítico.

## Quando uma imagem real é desejada (ex.: USG real, RX)

- Recriar localmente em SVG estilizado, **não** copiar imagem licenciada.
- Se o aluno precisar da imagem real para reconhecimento, redesenhar com elementos didáticos (setas, legendas).

## Ordem de fallback

1. Tentar SVG autoral.
2. Se SVG é caro: HTML/CSS com gradientes e ícones simples.
3. Se nada funciona: tabela ou texto com ícone Unicode.

## Regras de qualidade

- SVGs com `<title>` e `<desc>`.
- `role="img"` quando o SVG comunica informação.
- Cores via tokens (`--accent`, `--rose`, etc.) — adaptam-se a dark/light.
- Texto dentro de SVG limitado: legendas vão fora, em HTML, para serem responsivas.
- Mobile: revisar viewBox + readability em 360px.

## Checklist por página

Cada visual obrigatório (`matriz-visual-obrigatoria.md`) deve passar por:

- [ ] Renderiza sem console error.
- [ ] Legível em mobile (360px).
- [ ] Contraste OK em dark e light.
- [ ] Sem dependência externa.
- [ ] Tem alt-text/legenda.
