# PWA readiness · notas técnicas

A plataforma **NÃO implementa PWA** neste ciclo. Esta documentação prepara a futura conversão.

## Condições já atendidas

- [x] HTML/CSS/JS vanilla, sem build step.
- [x] Estrutura de rotas por hash (`#hero`, `#mapa-hipertensivo` etc.) — compatível com cache offline.
- [x] Assets locais (sem hotlink), exceto fontes (Inter via rsms.me, Manrope/Fraunces via Google Fonts).
- [x] Localização pt-BR consistente.
- [x] Theme color definido (`<meta name="theme-color" content="#1f2a55">`).
- [x] Viewport configurado (`width=device-width, initial-scale=1.0`).
- [x] Sem cookies, sem backend — 100% client-side.

## Pendente (futuro)

- [ ] `manifest.webmanifest` com nome, ícones, cores, display=standalone, start_url.
- [ ] Ícones 192x192, 512x512, maskable (gerar em SVG → PNG no momento da publicação).
- [ ] Service Worker com cache-first para HTML/CSS/JS/SVG e network-first para fontes.
- [ ] `<link rel="manifest" href="/manifest.webmanifest">` no index.html.
- [ ] Splash screen e `apple-touch-icon`.
- [ ] Estratégia de invalidação de cache (versão por build).
- [ ] Funcionalidade offline com fallback "página em construção" se ID não cacheado.

## Não fazer agora

- Não importar Workbox sem necessidade.
- Não criar Service Worker antes de definir estratégia de versionamento.
- Não converter para framework (React/Vue) — perderia a leveza.

## Referência publicada

GitHub Pages funciona bem. Em produção, configurar HTTPS (já é padrão no Pages).
