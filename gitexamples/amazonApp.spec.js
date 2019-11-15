describe('Elements are visible on screen', () => {
    before(() => {
      cy.visit('https://www.amazon.in')
   });
   it("shows login page details", () => {
 
    cy.get('#twotabsearchtextbox').type("watch");
    cy.get('.nav-search-submit > .nav-input').click();
    cy.get('.nav-search-scope nav-sprite').first().select("Electronics").click();

   });
});
     