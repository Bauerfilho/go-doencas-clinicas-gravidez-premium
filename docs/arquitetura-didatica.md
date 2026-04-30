# Arquitetura didática · GO Premium · Doenças Clínicas na Gravidez

## Premissa

A plataforma ensina o aluno a responder, em cada questão de gestante:

1. **Antes ou depois de 20 semanas?** (separa crônica de pré-eclâmpsia/gestacional)
2. **Há proteinúria?** (critério clássico)
3. **Se não há proteinúria, há lesão sistêmica?** (critério atualizado)
4. **Há critério de gravidade?** (decide internação, sulfato, parto)
5. **Vômito é fisiológico ou hiperêmese?** (perda de peso, cetonúria)
6. **HCG está alto demais?** (mola, gemelar, hipertireoidismo transitório)
7. **Diabetes é gestacional ou prévio?** (jejum 92 vs 126; 2h ≥200)
8. **A glicose está dentro do alvo?** (jejum <95, 1h <140, 2h <120)
9. **Mais de 30% das medidas fora do alvo?** (entra medicação)
10. **Macrossomia ou polidrâmnio?** (denuncia mau controle)
11. **Distócia: primeira conduta × primeira manobra?** (chamar ajuda × McRoberts)
12. **Mono ou dizigótica? Di ou monocoriônica? Di ou monoamniótica?**
13. **Sinal do lambda/Y ou T?**
14. **Oligo/polidrâmnio discordante?** (transfusão feto-fetal)
15. **Qual é o momento e a via de parto?**
16. **Qual palavra-chave muda o gabarito?**

## Estrutura em 6 blocos

| Bloco | Tema | Páginas | Cor |
| --- | --- | --- | --- |
| 0 | Início (capa + caso integrador) | 00–01 | navy |
| 1 | Hipertensão e pré-eclâmpsia | 02–13 (12 pp) | rose / coral controlado |
| 2 | Hiperêmese gravídica | 14–16 (3 pp) | teal hidratado |
| 3 | Diabetes na gestação | 17–26 (10 pp) | emerald frio |
| 4 | Gemelaridade | 27–32 (6 pp) | violeta / índigo |
| 5 | Revisão final | 33 (1 p) | navy + acentos integrados |

Total: **34 páginas** distribuídas em sections-1.js (1A do bloco hipertensão, 12 pp), sections-2.js (hiperêmese + diabetes, 13 pp) e sections-3.js (gemelaridade + revisão, 7 pp). Hero e caso integrador ficam inline em index.html (estado seguro).

## Fluxo de navegação

```
hero ──→ caso-integrador ──→ Bloco 1 (hipertensão)
                                  ↓
                              Bloco 2 (hiperêmese)
                                  ↓
                              Bloco 3 (diabetes)
                                  ↓
                              Bloco 4 (gemelaridade)
                                  ↓
                              Bloco 5 (simulador final)
                                  ↓ (loop)
                              hero
```

Cada página tem `prev`/`next` do dock; sidebar permite saltos por bloco.

## Camadas de leitura por página

1. **Pergunta central** — disparada no topo, foca o raciocínio.
2. **Visual reservado** — SVG/HTML autoral.
3. **Interação reservada** — componente listado em `componentes-interativos.md`.
4. **Cobertura textual** — itens que não podem ser resumidos.
5. **Selos de relevância** — `cai-pouco`, `pegadinha`, `aprofundamento`, `atualização`, `banca-grande`.
6. **Page dock** — anterior/próximo.

## Princípio editorial

A plataforma **não resume**. Detalhes que caem pouco aparecem com selo, mas não são removidos. Exemplos didáticos da aula são preservados em linguagem médica autoral. Ver `controle-de-nao-resumo.md`.
