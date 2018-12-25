context('Orbit change', () => {
  it('Select earth orbit', () => {
    cy.visit('/');
    cy.wait(1000);

    cy.get('.MuiSelect-select-260')
      .click()
      .then(() => {
        cy.wait(500);

        cy.get('li').each(($el, index, $list) => {
          // $el is a wrapped jQuery element
          if ($el.text().includes('Earth')) {
            cy.wrap($el)
              .click()
              .then(() => {
                cy.wait(500);
                cy.get('#description').contains('Earth');
                cy.get('#description > a')
                  .should('have.attr', 'href')
                  .and('include', 'Earth');
              });
          }
        });
      });
  });
});
