# Matriz interativa por página · 1 interação por página

Cada página tem **1 interação principal obrigatória**, com componente registrado em `componentes-interativos.md` e stub registrado em `scripts.js`.

| # | Página | Interação principal | Componente |
| --- | --- | --- | --- |
| 00 | hero | 5 cards clicáveis das portas de entrada | GOHeroMap (cards estáticos + link) |
| 01 | caso-integrador | Match enunciado → raciocínio | ClinicalCaseMatcher |
| 02 | mapa-hipertensivo | Seletor guiado de classificação | HypertensionDiagnosisTree |
| 03 | cronica-vs-gestacional | Timeline de semana + diagnóstico | PreeclampsiaVsChronicComparator |
| 04 | preeclampsia-diagnostico | Checklist diagnóstico multissistêmico | SystemicInjuryChecklist |
| 05 | proteinuria | Cenário ambulatorial × emergência | ProteinuriaLab |
| 06 | rastreio-preeclampsia | Construtor de risco em camadas | PreeclampsiaScreeningBuilder |
| 07 | prevencao-aas-calcio | Simulador de banca (MS / FEBRASGO / atual) | PreventionControversyPanel |
| 08 | criterios-gravidade | Triagem com decisão de conduta | SeverityTriageBoard |
| 09 | hellp-diferenciais | Classificador HELLP × esteatose × PE | HELLPDifferentialPanel |
| 10 | anti-hipertensivos | Simulador de PA × medicamento | AntihypertensiveCrisisSimulator + MedicationSafetyTable |
| 11 | sulfato-magnesio | Laboratório de segurança · 3 Rs | MagnesiumProtocolLab + MagnesiumToxicitySimulator |
| 12 | parto-preeclampsia | Simulador de momento do parto | DeliveryTimingPreeclampsiaStepper |
| 13 | puerperio-reclassificacao | Classificador de puerpério | PuerperiumReclassificationTimeline |
| 14 | hiperemese-vs-nausea | Checklist de decisão (orientar/ajustar/internar) | HyperemesisDecisionLab |
| 15 | hiperemese-diferenciais | Painel de diferenciais HCG/tireoide | HCGThyroidDifferentialMap |
| 16 | hiperemese-conduta | Ordem correta da conduta (drag-and-drop) | HyperemesisTreatmentProtocol |
| 17 | diabetes-rastreio | Verdadeiro × falso de fatores | DiabetesRiskClassifier |
| 18 | diabetes-diagnostico | Calculadora diagnóstica | GestationalDiabetesDiagnosisFlow |
| 19 | diabetes-fisiologia | Painel diagnóstico × acompanhamento | GlycemicProfileDashboard |
| 20 | diabetes-dieta-30 | Simulador da regra dos 30% | ThirtyPercentRuleSimulator |
| 21 | diabetes-tratamento | Classificador UBS × alto risco | DiabetesTreatmentNavigator |
| 22 | diabetes-insulina-trimestre | Simulador de ajuste fisiológico | InsulinPregnancyTimeline |
| 23 | diabetes-parto | Stepper de parto | DiabetesDeliveryTimingStepper |
| 24 | diabetes-complicacoes | Liga mecanismo × complicação | DiabeticFetusComplicationMap |
| 25 | distocia-ombros | Sequência de manobras com feedback | ShoulderDystociaSimulator |
| 26 | diabetes-puerperio | Classificador puerperal | DiabetesPuerperiumClassifier |
| 27 | gemelar-classificacao | Seletor de achados × afirmação | TwinClassificationMap |
| 28 | gemelar-divisao | Slider de dia da divisão | EmbryoSplitTimeline |
| 29 | gemelar-ultrassom | Laboratório de imagem (clicar nos sinais) | ChorionicityUltrasoundLab |
| 30 | gemelar-risco | Jogo conta/não conta | TwinRiskCardGame |
| 31 | gemelar-parto | Simulador de via de parto | TwinDeliveryRouteSimulator |
| 32 | gemelar-tttf | Simulador oligo/polidrâmnio | TTTSSimulator |
| 33 | simulador-final | Cockpit · 18 inputs → 9 outputs | GOProofSimulator + QuickRevisionFlashcards |

## Falha grave

- Mesma interação em todas as páginas.
- Interação que não responde a toque (mobile).
- Interação que esconde conteúdo essencial.
- Interação sem estado inicial compreensível.
- Interação sem feedback explicativo.

## TOTAL de componentes

- 36 componentes específicos da plataforma + 8 utilidades genéricas (flashcards, quiz, case-match, hotspots, stepper, layer-toggle, filter-table, reveal-on-scroll). Ver `componentes-interativos.md`.
