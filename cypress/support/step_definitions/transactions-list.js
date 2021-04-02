import loginPage from '../pages/login-page';
import transactionPage from '../pages/transactions-page';

given('a user who is in transactions screen', function () {
  transactionPage.actions.visit();
  loginPage.actions.login(Cypress.env('smokeUser').email, Cypress.env('smokeUser').password);
});
  
then('the system displays transactions sorted descending by date', function () {
  transactionPage.actions.checkTransactionsAreVisible();
});


given('a user who is in transactions screen', function () {
  transactionPage.actions.visit();
  loginPage.actions.login(Cypress.env('smokeUser').email, Cypress.env('smokeUser').password);
});

when('clicks the create button', function () {
  transactionPage.actions.create();
});

then('the system creates a new training session', function() {
  transactionPage.actions.checkIsInTrainingsPage();
});
