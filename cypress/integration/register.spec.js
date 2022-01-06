context("Search", () => {
    it("Searches for an user address", () => {
        cy.visit('http://localhost:3000')
        cy.viewport(1440, 900)

        cy.get("input[placeholder=Insira o CEP]").type("60160110");
        cy.get("button[type=submit]").click();

        cy.contains('Rua Ana Bilhar')
    })
})