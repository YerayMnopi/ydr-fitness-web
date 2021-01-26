import loginPage from '../pages/login-page';
import transactionPage from '../pages/transactions-page';

given('a user who is in transactions screen', function () {
  transactionPage.actions.visit();
  loginPage.actions.login('user', 'pass');
});
  
then('the system displays transactions sorted descending by date', function () {
  transactionPage.actions.checkTransactionsAreVisible();
});
