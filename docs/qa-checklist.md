# QA checklist · Prompt 1 e Prompt 2

## QA do Prompt 1 (final desta entrega)

### Estrutural
- [x] Pasta nova `go-doencas-clinicas-gravidez-premium/` criada.
- [x] Templates antigos (`1-Nefro`, `epidemiologia-estudos-premium`) intactos.
- [x] Index.html carrega.
- [x] Sidebar dinâmica com 34 entradas em 6 seções.
- [x] Topbar com título "GO Premium · Doenças Clínicas na Gravidez".
- [x] Mobile menu funcional (scrim + menu-btn).
- [x] Light + dark mode toggle (localStorage `go-theme`).
- [x] 34 IDs únicos: hero, caso-integrador (inline) + 32 placeholders.

### Conteúdo antigo · varredura
- [x] Sem "epidemiologia" / "EPIDEMIOLOGIA" no texto visível.
- [x] Sem "nefrologia" / "glomerulopatia".
- [x] Sem "tabela 2x2" / "forest plot" / "estudo epidemiológico".
- [x] Sem "proctologia", "hemorroida", "fissura".
- [x] Sem "suprarrenal" fora de contexto gestacional.
- [x] Sem "pneumonia", "HDA".
- [x] Tokens `--epi-*` mantidos como aliases inertes para compat (CSS legado).

### Visual / interação
- [x] Cada placeholder tem visual reservado + interação reservada.
- [x] Cada componente registrado tem stub didático ativo.
- [x] Nenhuma página é texto puro.
- [x] Nenhum visual depende de hotlink.

### Documentação
- [x] 19 docs criados em `/docs`.
- [x] Componentes inventariados.
- [x] Controle de não-resumo com 100+ itens.

## QA do Prompt 2 (a executar)

### Por página
- [ ] Visual principal renderiza.
- [ ] Interação principal funciona em toque.
- [ ] Labels e alt-text presentes.
- [ ] Contraste adequado (light + dark).
- [ ] Estado inicial informa o conceito antes da interação.
- [ ] Mini quiz / microinteração quando aplicável.
- [ ] Selos de relevância nas armadilhas.
- [ ] Page dock anterior/próximo correto.

### Editorial
- [ ] Sem marcas de transcrição ("professor", "PDF anexado", etc.).
- [ ] Terminologia padronizada (ver `terminologia.md`).
- [ ] Mnemônicos das 30+ frases-âncora aplicados.
- [ ] Conteúdo das aulas preservado integralmente (ver `controle-de-nao-resumo.md`).

### Técnico
- [ ] Sem erros no console.
- [ ] Sem placeholders visíveis após implementação.
- [ ] Mobile-first OK.
- [ ] `prefers-reduced-motion` respeitado.
- [ ] Foco visível por teclado.
