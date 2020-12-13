
    const emailInput = () => cy.get('input[name="email"]');
    const nameInput = () => cy.get('input[name="name"]');
    const submitButton = () => cy.get('#submitBtn');
    const checkBox = () => cy.get('#checkbox')
    const pass = () => cy.get('#password')

describe("sample tests", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
    it('Can open the project', () => {
        cy.url().should('include', 'localhost');
    });
    // const emailInput = () => cy.get('input[name="email"]');
    // const nameInput = () => cy.get('input[name="name"]');
    // const submitButton = () => cy.get('#submitBtn');
    // const checkBox = () => cy.get('#checkbox')

    

        it("Is it working", () => {
      expect(1 + 2).to.equal(3);
      expect(2 + 2).not.to.equal(5);
    });

        it("name input field?", () => {

          nameInput().should("exist");
     });

    it("email element is there?", () => {

      emailInput().should("exist");

});

it("subbutton is there?", () => {

  submitButton().should("exist");

});

it("checkbox is present", () => {

  checkBox().should("exist");

});

it("password input field", () => {

  pass().should("exist");

});


})

describe('filling in and submiting inputs', () => {
 it('can type inside the inputs name', () => {
  nameInput().should('have.value', "")
  .type('Anil')
  .should('have.value', 'Anil')  //passed
 })

 it('can type inside the inputs email', () => {
  emailInput().should('have.value', "")
  .type('anil.gitme@gmail.com')
  .should('have.value', 'anil.gitme@gmail.com')  //passed
 })

 it('can type inside the inputs password', () => {
  pass().should('have.value', "")
  .type('gaga')
  .should('have.value', 'gaga')  //passed
 })

 it('can check checkbox', () => {
  // cy.get('[for="terms"] > input')
  // .click()
  // .should('have.checked', true)
  checkBox().check();
 })

 it('can submit form', () => {
   submitButton().click()
 })
  })
