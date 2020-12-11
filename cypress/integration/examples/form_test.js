
describe("sample tests", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
    it('Can open the project', () => {
        cy.url().should('include', 'localhost');
    });
    const emailInput = () => cy.get('input[name="email"]');
    const nameInput = () => cy.get('input[name="name"]');
    const submitButton = () => cy.get('input[name="submitBtn"]');
    

        it("Is it working", () => {
      expect(1 + 2).to.equal(3);
      expect(2 + 2).not.to.equal(5);
    });

        it("elements are showing on the screen", () => {

          nameInput().should("exist");

    });

    it("elements are showing on the screen", () => {

      emailInput().should("exist");

});

it("elements are showing on the screen", () => {

  submitButton().should("exist");

});


})