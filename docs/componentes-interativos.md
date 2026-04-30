# Componentes interativos · catálogo

Todos os componentes seguem a convenção `data-component="NomeDoComponente"` no DOM. O `scripts.js` registra um stub para cada nome no Prompt 1; o Prompt 2 substitui por implementação real preservando a marcação de página.

## Componentes genéricos (já implementados — Prompt 1)

| Nome | Trigger DOM | Estado |
| --- | --- | --- |
| flashcard | `[data-component="flashcard"]` | Pronto |
| quiz | `[data-component="quiz"]` | Pronto |
| case-match | `[data-component="case-match"]` | Pronto · usado no caso integrador |
| hotspots | `[data-component="hotspots"]` | Pronto |
| stepper | `[data-component="stepper"]` | Pronto |
| layer-toggle | `[data-component="layer-toggle"]` | Pronto |
| filter-table | `[data-component="filter-table"]` | Pronto |
| reveal-on-scroll | aplicado a `.card`, `.svg-card` etc. | Pronto |

## Componentes específicos da plataforma (36 — stubs no Prompt 1, implementação no Prompt 2)

### Bloco 1 · Hipertensão & pré-eclâmpsia (12 + 1 utilitário)

1. **GOHeroMap** — fluxo gestante → diagnóstico → conduta (cards do hero).
2. **ClinicalCaseMatcher** — match das 4 vinhetas com raciocínio.
3. **HypertensionDiagnosisTree** — árvore com 4 saídas.
4. **PreeclampsiaVsChronicComparator** — timeline + comparador.
5. **SystemicInjuryChecklist** — checklist multissistêmico.
6. **ProteinuriaLab** — pódio + cenário.
7. **PreeclampsiaScreeningBuilder** — construtor de risco em camadas.
8. **PreventionControversyPanel** — simulador de banca AAS/cálcio.
9. **SeverityTriageBoard** — semáforo + decisão.
10. **HELLPDifferentialPanel** — classificador HELLP × esteatose × PE.
11. **AntihypertensiveCrisisSimulator** — PA → medicamento.
12. **MedicationSafetyTable** — tabela permitido/proibido.
13. **MagnesiumProtocolLab** — Pritchard × Zuspan.
14. **MagnesiumToxicitySimulator** — 3 Rs + gluconato.
15. **DeliveryTimingPreeclampsiaStepper** — stepper de parto na PE.
16. **PuerperiumReclassificationTimeline** — linha do tempo puerperal.

### Bloco 2 · Hiperêmese (3)

17. **HyperemesisDecisionLab** — checklist náusea × hiperêmese.
18. **HCGThyroidDifferentialMap** — mapa HCG/tireoide.
19. **HyperemesisTreatmentProtocol** — ordem da conduta.

### Bloco 3 · Diabetes (10)

20. **DiabetesRiskClassifier** — verdadeiro/falso de fatores.
21. **GestationalDiabetesDiagnosisFlow** — fluxograma + calculadora.
22. **OGTTInteractiveCurve** — curva interativa do TOTG.
23. **GlycemicProfileDashboard** — diagnóstico × acompanhamento.
24. **ThirtyPercentRuleSimulator** — regra dos 30%.
25. **DiabetesTreatmentNavigator** — UBS × alto risco.
26. **InsulinPregnancyTimeline** — escadinha por trimestre.
27. **DiabetesDeliveryTimingStepper** — régua 37–40 sem.
28. **DiabeticFetusComplicationMap** — mecanismo × complicação.
29. **ShoulderDystociaSimulator** — McRoberts → Gaskin.
30. **DiabetesPuerperiumClassifier** — DM1/DM2/DMG.

### Bloco 4 · Gemelaridade (6)

31. **TwinClassificationMap** — zigoto × córion × âmnio.
32. **EmbryoSplitTimeline** — slider de divisão.
33. **ChorionicityUltrasoundLab** — sacos, lambda, Y, T.
34. **TwinRiskCardGame** — conta/não conta.
35. **TwinDeliveryRouteSimulator** — corionicidade × via.
36. **TTTSSimulator** — placenta única + oligo/poli.

### Bloco 5 · Revisão final (2)

37. **GOProofSimulator** — cockpit clínico (18 inputs → 9 outputs).
38. **QuickRevisionFlashcards** — flashcards de revisão integrada.

## Convenções

- Toda interação **funciona com toque** (mobile-first).
- Estado inicial sempre comunica o conceito mesmo antes da interação.
- Feedback explicativo em cada acerto/erro (não apenas verde/vermelho).
- Sem hover-only.
- Sem JS pesado: vanilla, sem build step, sem framework.
- Componentes têm `data-implemented="1"` quando o Prompt 2 os ativa, evitando que o stub generator os sobrescreva.

## Stubs no Prompt 1

Cada componente tem um placeholder didático ativo desde o Prompt 1 (ver `scripts.js`, função `initStub`). O placeholder explica o que será construído, evitando "imagem em branco" durante navegação.
