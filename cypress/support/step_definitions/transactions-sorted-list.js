import loginPage from '../pages/login-page';
import transactionPage from '../pages/transactions-page';

given('a user who is in transactions screen', function () {
    transactionPage.actions.visit();
    loginPage.actions.login(Cypress.env('smokeUser').email, Cypress.env('smokeUser').password);
});
    
when('he tries to sort by date', function () {
    transactionPage.actions.sortByOldest();
});

then('the system displays transactions sorted ascending by date', function() {
    transactionPage.actions.checkSortByOldest();
});