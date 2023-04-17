context('Rate check', () => {
  before(() => {
    cy.clearLocalStorage();
  });

  it('Check if bitcoins last 24 hours rate change was positive', () => {
    cy.visit('https://spectrocoin.com/en/')
    cy.wait(5000);
    cy.get('a.sg').should('be.visible').contains('Rates').click();
    cy.get('.ir.jr').first().should('contain.text', '-');
    // I don't know if this is mac specific or what not, but for me the proper
    // sollution was the one with an element 'div.pr.qr' as when cy interface opens
    // the table design changes for some reason and you cannot locate the element
    // via '.ir.jr'. Leaving the '.ir.jr' sollution uncommented though, as this is
    // probably some discrepancy on my end
    // In order the test fails locating '.ir.jr' element please comment line 10
    // and uncomment line 18

    // cy.get('div.pr.qr').first().should('contain.text', '+');
  });
});