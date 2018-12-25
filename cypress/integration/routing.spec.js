context('Routing', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Go to about', () => {
    cy.get('a[href="/about/"]').click();
    cy.url().should('includes', 'about');
  });

  it('Go to home', () => {
    cy.get('a[href="/"]').click();
    cy.url().should('includes', '/');
  });

  it('Go to 404', () => {
    cy.visit('/404');
    cy.contains('404 not found').should('be.visible');
  });
});
