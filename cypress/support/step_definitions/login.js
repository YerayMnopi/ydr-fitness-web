import loginPage from '../pages/login-page';
import transactionPage from '../pages/transactions-page';

given('a user who already has an account', function () {
  loginPage.actions.visit();
});
  
when('he tries to login with valid credentials', function () {
  loginPage.actions.login('fgsdfgsdgrgrtrtrt@yahoo.es', '1aragon1');
});

then('the system redirects to transaction list', function () {
  expect(transactionPage.actions.checkIsInTransactionsPage());
});


given('a user who already has an account', function () {
  loginPage.actions.visit();
});
  
when('he tries to login with invalid credentials', function () {
  loginPage.actions.login('user@email.com', 'invalidPass');
});

then('the system displays an error', function () {
  expect(loginPage.actions.checkErrorMessageIsShown());
});


given('a user who is not logged in', function () {
});
  
when('he tries to access transactions screen', function () {
  transactionPage.actions.visit();
});

then('the system redirects to login page', function () {
  expect(loginPage.actions.checkIsInLoginPage());
});