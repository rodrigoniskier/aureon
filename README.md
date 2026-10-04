# Aureon Systems

Site institucional responsivo e portfólio conceitual. Identidade navy/teal, logomarca SVG própria e conteúdo em português.

## Executar

Requer Node.js 22 ou superior, sem instalação de dependências.

```sh
node scripts/build.mjs
node scripts/check.mjs
node scripts/serve.mjs
```

Acesse http://127.0.0.1:4173. A pasta `dist/` é gerada no build e não é versionada.

## Estrutura

- `scripts/build.mjs`: conteúdo e geração das oito páginas HTML.
- `public/style.css`: estilos responsivos e suporte a movimento reduzido.
- `public/app.js`: menu móvel, filtros do portfólio e briefing local.
- `public/logo.svg`: marca abstrata original desenvolvida para este projeto; sem alegação de registro ou exclusividade.
- `vercel.json`: build, URLs limpas e cabeçalhos de segurança.

## Publicação

Importar este repositório na Vercel. O arquivo `vercel.json` configura o comando de build e a pasta de saída. Não são necessárias variáveis de ambiente.

## Natureza do conteúdo

Aureon Systems é uma empresa fictícia para treinamento e demonstração. A narrativa de investidores, executivos e contratação por projeto é simulada. EduMetrics, OrderFlow e EvidenceDesk são estudos conceituais, não produtos entregues a clientes reais. Essa informação aparece no rodapé e nos Termos. Não há depoimentos, clientes, receita ou resultados reais inventados.

O briefing apenas baixa um arquivo local. Não há servidor de contato, e-mail comercial, pagamentos, analytics ou coleta de leads. Para atendimento real, é necessário configurar um canal verificado e revisar os textos legais. A nota legal não equivale a parecer jurídico nem garante proteção absoluta.
