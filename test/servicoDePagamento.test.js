import assert from 'node:assert';
import { ServicoDePagamento } from '../src/servicoDePagamento.js';

describe('ServicoDePagamento', () => {
  it('realiza pagamento com valor acima de 100.00 resultando em categoria cara', () => {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();

    // Act
    servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    // Assert
    assert.equal(ultimoPagamento.codigoBarras, '0987-7656-3475');
    assert.equal(ultimoPagamento.empresa, 'Samar');
    assert.equal(ultimoPagamento.valor, 156.87);
    assert.equal(ultimoPagamento.categoria, 'cara');
  });

  it('realiza pagamento com valor abaixo de 100.00 resultando em categoria padrão', () => {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();

    // Act
    servicoDePagamento.pagar('1234-5678-9012', 'Copel', 56.87);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    // Assert
    assert.equal(ultimoPagamento.codigoBarras, '1234-5678-9012');
    assert.equal(ultimoPagamento.empresa, 'Copel');
    assert.equal(ultimoPagamento.valor, 56.87);
    assert.equal(ultimoPagamento.categoria, 'padrão');
  });

  it('realiza pagamento com valor exato de 100.00 resultando em categoria padrão', () => {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();

    // Act
    servicoDePagamento.pagar('1111-2222-3333', 'Agua', 100.00);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    // Assert
    assert.equal(ultimoPagamento.valor, 100.00);
    assert.equal(ultimoPagamento.categoria, 'padrão');
  });

  it('consulta apenas o ultimo pagamento realizado', () => {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();

    // Act
    servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
    servicoDePagamento.pagar('1234-5678-9012', 'Copel', 56.87);
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    // Assert
    assert.equal(ultimoPagamento.codigoBarras, '1234-5678-9012');
    assert.equal(ultimoPagamento.empresa, 'Copel');
    assert.equal(ultimoPagamento.valor, 56.87);
    assert.equal(ultimoPagamento.categoria, 'padrão');
  });

  it('verifica que ultimo pagamento é undefined quando nenhum pagamento foi realizado', () => {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();

    // Act
    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    // Assert
    assert.equal(ultimoPagamento, undefined);
  });
});
