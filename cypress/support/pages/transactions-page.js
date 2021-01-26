import action from '../cywrapper/Action';
import expect from '../cywrapper/Expect';

const url = '/';

const selectors = {
  heading: '.transactions__header',
  transaction: '.transactions__transaction',
  emptyMessage: '.transactions__empty-message',
  transactionDate: '.transaction__date',
  transactionDescription: '.transaction__description',
  searchInput: '.transactions__search',
  sortAscRadioButton: '.transactions__sort--asc'
};

const actions = {
  visit: () => {
    cy.visit(url);
  },
  checkIsInTransactionsPage: () => expect.elementShouldBeVisible(selectors.heading),
  checkTransactionsAreVisible: () => expect.elementShouldBeVisible(selectors.transaction),
  checkEmptyMessageIsVisible: () => expect.elementShouldBeVisible(selectors.emptyMessage),
  checkSearch: (textToSearch) => {
    expect.fieldContainsText(selectors.transactionDescription, textToSearch);
  },
  search: (textToSearch) => {
    action.typeField(selectors.searchInput, textToSearch);
  },
  sortByOldest: () => {
    action.clickElement(selectors.sortAscRadioButton);
  },
  checkSortByOldest: () => {
    return cy.get(selectors.transactionDate).should(dates => {
      let firstTransactionDate = new Date(dates[0].dataset.e2e).valueOf();
      let secondTransactionDate = new Date(dates[1].dataset.e2e).valueOf();
      let thirdTransactionDate = new Date(dates[2].dataset.e2e).valueOf();
  
      const checkSortedByOldest = firstTransactionDate < secondTransactionDate < thirdTransactionDate;
      chai.expect(checkSortedByOldest).to.be.equal(true);
    });
  }
};

export default {
  name: 'Transactions',
  selectors,
  actions,
};
