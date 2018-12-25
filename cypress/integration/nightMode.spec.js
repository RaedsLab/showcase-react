context('Nigh mode', () => {
  it('Switch to night mode', () => {
    cy.server();

    // we set the response to be the activites.json fixture
    cy.route(
      'GET',
      'https://cors-anywhere.herokuapp.com/en.wikipedia.org/w/api.php?action=opensearch&limit=1&format=json&search=Earth',
      'fixture:wiki.json'
    );
    cy.visit('/');
    cy.get('#switch-night-mode').click();
    cy.get('header').should(
      'have.css',
      'background-color',
      'rgb(158, 158, 158)'
    );
  });
});
