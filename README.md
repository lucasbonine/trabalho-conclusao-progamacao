# Serviço de Pagamento

Projeto desenvolvido em Node.js para testar um serviço de pagamento.

## Executando o projeto

Instale as dependências e rode os testes:

```bash
npm install
npx mocha
```

## Pipelines

As pipelines foram criadas com GitHub Actions e estão na pasta `.github/workflows`.

- `01-ci-push.yml`: executa a cada push.
- `02-ci-manual.yml`: pode ser executada manualmente.
- `03-ci-agendada.yml`: executa de hora em hora.

Todas as pipelines instalam as dependências e executam os testes com Mocha.

## Relatório

Os testes geram um relatório no formato JUnit XML. O relatório é publicado na execução da pipeline e armazenado como artifact por 30 dias.

O `if: always()` permite salvar o relatório mesmo quando algum teste falha.
