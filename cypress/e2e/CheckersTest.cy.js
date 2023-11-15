import CheckersPage from '../e2e/CheckersPage.cy.js';
describe('Checkers Game Tests', () => {
    const checkersPage = new CheckersPage();
    const checkersURL = 'https://www.gamesforthebrain.com/game/checkers/';
    const title = 'Checkers - Games for the Brain';
    before(() => {
        cy.visit(checkersURL);
        cy.url().should('eq', checkersURL);
        cy.title().should('eq', title);
    });
    it('I make five legal moves as orange', () => {
        checkersPage.square62().click();
       cy.wait(2000);
        checkersPage.square73().click();
       cy.wait(2000);
        checkersPage.square51().click();
        cy.wait(2000);
        checkersPage.square62().click();
        cy.wait(2000);
        checkersPage.square22().click();
        cy.wait(2000);
        checkersPage.square13().click();
        cy.wait(2000);
        checkersPage.square42().click();
        cy.wait(2000);
        checkersPage.square24().click();
        cy.wait(2000);
        checkersPage.square62().click();
       cy.wait(2000);
        checkersPage.square53().click();
       cy.wait(2000);
       checkersPage.message().should('have.text', 'Make a move.');
       checkersPage.restartBtn().click();
       checkersPage.message().should('have.text', 'Select an orange piece to move.');
    });
});
