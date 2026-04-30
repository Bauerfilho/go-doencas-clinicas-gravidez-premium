# Matriz visual obrigatória · 1 visual por página

Cada página tem **1 visual estático principal obrigatório** (SVG/HTML/CSS local — sem hotlink). Asset remoto fica banido; tudo se renderiza offline.

| # | Página | Visual principal |
| --- | --- | --- |
| 00 | hero | Hero materno-fetal: gestante → pistas (PA, glicose, vômito, gêmeos) → diagnóstico → gravidade → conduta → parto → gabarito |
| 01 | caso-integrador | Mosaico de 4 vinhetas com selos por trilha (rosa, teal, esmeralda, violeta) |
| 02 | mapa-hipertensivo | Árvore de decisão com 4 saídas (crônica, gestacional, PE, sobreposta) |
| 03 | cronica-vs-gestacional | Tabela comparativa lado a lado com timeline gestacional/puerperal |
| 04 | preeclampsia-diagnostico | Painel multissistêmico ao redor de silhueta de gestante (rim, pulmão, fígado, plaqueta, cérebro) |
| 05 | proteinuria | Pódio dos métodos: 24h → P/Cr → fita |
| 06 | rastreio-preeclampsia | Painel em 4 camadas (clínica → PA → Doppler → biomarcadores) |
| 07 | prevencao-aas-calcio | 4 cards comparativos com selo âmbar para o ponto controverso |
| 08 | criterios-gravidade | Semáforo clínico em painel anatômico |
| 09 | hellp-diferenciais | Trio integrado fígado/plaqueta/hemólise com setas para diferenciais |
| 10 | anti-hipertensivos | Tabela premium com selos permitido/de escolha/proibido |
| 11 | sulfato-magnesio | Laboratório do magnésio com bomba infusora e cards Pritchard × Zuspan |
| 12 | parto-preeclampsia | Stepper por idade gestacional × gravidade |
| 13 | puerperio-reclassificacao | Linha do tempo gestação → 12 semanas pós-parto |
| 14 | hiperemese-vs-nausea | Comparador "náusea comum" × "hiperêmese" |
| 15 | hiperemese-diferenciais | Mapa HCG → tireoide → vômito com diferenciais (mola, gemelar, pancreatite) |
| 16 | hiperemese-conduta | Pirâmide de conduta (internar → hidratar → tiamina → antiemético → VO) |
| 17 | diabetes-rastreio | Cartão de anamnese com pistas destacadas |
| 18 | diabetes-diagnostico | Fluxograma diagnóstico (jejum < 20 sem + TOTG 24–28 sem) |
| 19 | diabetes-fisiologia | Timeline placenta → hormônios → resistência |
| 20 | diabetes-dieta-30 | Dashboard de glicemias da semana com alvos coloridos |
| 21 | diabetes-tratamento | Mapa de encaminhamento UBS × alto risco |
| 22 | diabetes-insulina-trimestre | Escadinha de dose por trimestre |
| 23 | diabetes-parto | Régua gestacional 37–40 semanas |
| 24 | diabetes-complicacoes | Cadeia mãe → feto → RN |
| 25 | distocia-ombros | Pelve com ombro preso na sínfise + cards de manobras |
| 26 | diabetes-puerperio | Trilhas pós-parto DM1/DM2/DMG |
| 27 | gemelar-classificacao | Comparador zigoto × placenta × cavidade amniótica |
| 28 | gemelar-divisao | Timeline embrionária 0–14 dias |
| 29 | gemelar-ultrassom | USG estilizado com sacos, vesículas, lambda, Y, T |
| 30 | gemelar-risco | Cards verdadeiro/falso de fatores de risco |
| 31 | gemelar-parto | Régua de idade gestacional por corionicidade |
| 32 | gemelar-tttf | Placenta única com anastomoses + 2 fetos |
| 33 | simulador-final | Memory board com 9 trilhas integradas |

## Falha grave

- Página sem visual.
- Mesmo visual repetido em páginas diferentes.
- Asset remoto sem fallback local.
- SVG quebrado em mobile.
- Falta de alt-text/ARIA.

## Fallback

Quando uma imagem externa não puder ser usada, recriar localmente em SVG/HTML/CSS. Ver `fallback-visuais.md`.
