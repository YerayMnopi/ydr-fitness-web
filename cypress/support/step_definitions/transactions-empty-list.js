import loginPage from '../pages/login-page';
import transactionPage from '../pages/transactions-page';

given('a user who is in transactions screen', function () {
  transactionPage.actions.visit();
  loginPage.actions.login(Cypress.env('smokeUser').email, Cypress.env('smokeUser').password);
});

when('there are no transactions', function () {
  cy.server();
  cy.route({
    method: 'GET',
    url: `**/transactions**`,
    response: []
  });
});

then('the system displays an empty notification message', function() {
  transactionPage.actions.checkEmptyMessageIsVisible();
});
