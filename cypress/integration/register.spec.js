context("Search", () => {
    it("Searches for an user address", () => {
        cy.visit('https://react-entrega-s5-criando-testes-bruno-faria93.vercel.app')
        cy.viewport(1440, 900)

        cy.get("input").type("60160110");
        cy.get("button").click();


        cy.contains('Logradouro')
    })
})