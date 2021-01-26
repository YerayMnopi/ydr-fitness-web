export default {

  // type something into an input field
  typeField(elem, text, clear = true) {
    this.type(cy.get(elem), text, clear);
  },

  type(elem, text, clear = true) {
    if (clear) {
      elem.clear();
    }
    if (text && text.length !== 0) {
      return elem.type(text);
    }
    return null;
  },

  // Click any kind of element on the screen as long as it is enabled/visible

  clickElement(elem, forceAction = false) {
    this.click(cy.get(elem), forceAction);
  },

  click(elem, forceAction = false) {
    return elem.click({ force: forceAction });
  },

};
