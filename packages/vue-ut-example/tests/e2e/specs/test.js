// https://docs.cypress.io/api/introduction/api.html

/**
 * 选择元素
 * https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Querying-Elements
 *
 * 断言方法
 * https://docs.cypress.io/guides/references/assertions.html#Common-Assertions
 */
describe('Home Page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Latest Vue.js Commits')

    cy.get('#master').should('be.checked')
    cy.get('p').contains('vuejs/vue@master')
    cy.get('ul > li').should('have.length', 3)

    // change dev
    cy.get('#dev').check()
    cy.get('#master').should('not.be.checked')
    cy.get('p').contains('vuejs/vue@dev')
    cy.get('ul > li').should('have.length', 3)
  })
})
