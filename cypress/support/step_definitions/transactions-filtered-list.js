import loginPage from '../pages/login-page';
import transactionPage from '../pages/transactions-page';

given('a user who is in transactions screen', function () {
    transactionPage.actions.visit();
    loginPage.actions.login(Cypress.env('smokeUser').email, Cypress.env('smokeUser').password);
});

when('he tries to search a transaction', function () {
    transactionPage.actions.search('Tempor');
});

then('the system displays matching transactions', function() {
    transactionPage.actions.checkSearch('Tempor');
});