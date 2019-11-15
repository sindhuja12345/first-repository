describe('Elements are visible on screen', () => {
    
    beforeEach(() => {
          cy.visit('https://www.enlume.com/')
      });
     it("showsenlume logo on screen", () => {
      cy.get('#logo > :nth-child(3)').should('be.visible')
      });
  });
  