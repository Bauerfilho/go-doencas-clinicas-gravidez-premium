# Design system · GO Premium · Doenças Clínicas na Gravidez

Estética: Apple-like, glassmorphism, gradientes suaves, dark mode prioritário. Paleta materno-fetal contextual por bloco.

## Paleta global

| Token | Valor (light) | Valor (dark) | Uso |
| --- | --- | --- | --- |
| `--accent` | #2d3a78 navy | #6f8aff azure | sustento clínico |
| `--info` | #1d57bb perinatal | #6ea3ff | estabilidade |
| `--success` | #0a8a6b verde frio | #38d6a8 | controle glicêmico |
| `--warning` | #b47d18 âmbar | #f1bb55 | atenção / atualização |
| `--danger` | #c93f5b coral | #ff7a8e | gravidade vascular |
| `--purple` | #5b3bd1 índigo | #b29aff | gemelaridade |
| `--rose` | #d6406b obstétrico | #ff85a6 | pré-eclâmpsia |
| `--teal` | #0a9f9c hidratado | #5dd6cf | hiperêmese |

## Cores por bloco (`body[data-block]`)

- **intro / review**: navy/azure
- **hipertensao**: rose / coral controlado
- **hiperemese**: teal hidratado
- **diabetes**: emerald frio
- **gemelar**: violeta / índigo

## Pattern de fundo (5 fontes luminosas)

```css
--pattern:
  radial-gradient(circle at 12% 14%, rgba(45, 58, 120, 0.14), transparent 24%),
  radial-gradient(circle at 84% 18%, rgba(214, 64, 107, 0.10), transparent 22%),
  radial-gradient(circle at 78% 80%, rgba(91, 59, 209, 0.11), transparent 22%),
  radial-gradient(circle at 18% 78%, rgba(10, 159, 156, 0.10), transparent 22%),
  radial-gradient(circle at 50% 48%, rgba(180, 125, 24, 0.06), transparent 28%);
```

## Tipografia

- UI: **Manrope** (400, 500, 600, 700, 800)
- Display: **Fraunces** (600, 700, 800)
- Mono: SF Mono / Menlo

## Selos de relevância (`.relevance-tag`)

| Classe | Cor | Uso |
| --- | --- | --- |
| r-cai-pouco | text-soft | tema raro, mas presente |
| r-pegadinha | warning | armadilha clássica |
| r-aprofundamento | purple | nuance avançada |
| r-atualizacao | info | mudança recente |
| r-banca-grande | rose | tema de bancas grandes |

## Cards

- Borda 1px translúcida + sombra macia.
- Corner radius: `--radius-md` (18px) padrão; `--radius-lg` para hero.
- Hover: lift 2px + sombra média.
- Foco visível: outline accent 2px com 2px offset.
- `glass`: blur moderado + fundo semitransparente.

## Dark mode

Prioridade máxima: deve ficar melhor que o light mode.

- Fundo escuro vivo (não preto chapado).
- Halos sutis nos cantos (teal raciocínio, coral gravidade, verde diabetes, violeta gemelaridade, âmbar atualização).
- Texto sobre fundo calmo, nunca sobre glow forte.
- Sem neon excessivo.

## Componentes técnicos

- `.placeholder-pane` — usado pelo stub generator (Prompt 1).
- `.q-central` — pergunta central no topo da página.
- `.entry-card` — portas de entrada do hero.
- `.patient-card` — vinhetas do caso integrador.
- `.page-dock` — navegação anterior/próximo.

## Refinamento estético

O Prompt 3 finaliza luzes de canto, microinterações, halos por bloco e QA visual página a página. Ver `qa-checklist.md` para critérios.
