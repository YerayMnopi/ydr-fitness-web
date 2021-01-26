import action from '../cywrapper/Action';
import expect from '../cywrapper/Expect';

const url = '/auth';

const selectors = {
  emailInput: '.login__input--email',
  passwordInput: '.login__input--password',
  submitButton: '.login__submit-button',
  errorMessage: '.login__error-message'
};

const actions = {
  visit: () => {
    cy.visit(url);
  },
  login: (email, password) => {
    action.typeField(selectors.emailInput, email);
    action.typeField(selectors.passwordInput, password);
    action.clickElement(selectors.submitButton);
  },
  checkIsInLoginPage: () => expect.elementShouldBeVisible(selectors.emailInput),
  checkErrorMessageIsShown: () => expect.elementShouldBeVisible(selectors.errorMessage)
};

export default {
  name: 'Login',
  selectors,
  actions,
};
