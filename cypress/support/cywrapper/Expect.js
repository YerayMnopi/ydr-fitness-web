export default {

  fieldContainsText(elem, text) {
    this.fieldContains(cy.get(elem), text);
  },

  fieldContains(elem, text) {
    return elem.should('contain', text);
  },

  elementShouldBeVisible(elem) {
    this.shouldBeVisible(cy.get(elem));
  },

  shouldBeVisible(elem) {
    return elem.should('be.visible');
  },

};
