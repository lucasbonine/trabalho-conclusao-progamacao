# Serviço de Pagamento

Projeto desenvolvido em Node.js para testar um serviço de pagamento.

## Executando o projeto

Instale as dependências e rode os testes:

```bash
npm install
npx mocha
```

## Pipeline

A pipeline foi criada com GitHub Actions e está no arquivo `.github/workflows/01-ci.yml`.

Ela pode ser iniciada de três formas:

- a cada push;
- manualmente pela aba Actions;
- de hora em hora pelo agendamento.

A pipeline possui um job com etapas para baixar o projeto, configurar o Node.js, instalar as dependências e executar os testes.

## Relatório

Os testes geram um relatório no formato JUnit XML. O relatório é publicado na execução da pipeline e armazenado como artifact por 30 dias.

O `if: always()` permite salvar o relatório mesmo quando algum teste falha.
