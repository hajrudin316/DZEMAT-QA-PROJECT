import { faker } from '@faker-js/faker';
import loginPage from '../pageObjects/loginPage'
import homePage from '../pageObjects/homePage'
describe('dzemat menagament', () => {
  beforeEach(() => {
    loginPage.visit()
    loginPage.typeInUserCredentials()
    loginPage.loginBtn().click()
  })


  it('QV3 Verify that a user can add a new džemat entry', () => {
    let dzematname = faker.location.city()

    cy.get('.navbar-list > :nth-child(4)').click()

    cy.get('.cta-title').should('contain', 'Dodaj džemat')
    cy.get('.cta-description').should('contain', 'Dodaj podatke o novom džematu')
    cy.get('.mdc-button__label').should('be.visible')
    cy.get('.mdc-button__label').click()

    cy.get('h1').should('contain', 'Džemati')
    cy.get('#name').should('be.visible')
    cy.get('.MuiButtonBase-root').should('be.visible')

    cy.get('#name').type(dzematname)
    cy.get('.MuiButtonBase-root').click()
  })



  it('QV4 Verify that a user can view a new džemat entry', () => {
    cy.get('.navbar-list > :nth-child(4)').click()
    cy.get('[aria-colindex="2"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle').should('be.visible')
    cy.get('[aria-colindex="2"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle').should('contain', 'Naziv džemata')

  })



  it('QV-5 Verify that a user can edit an existing džemat', () => {
    let dzematname = faker.location.city()

    cy.get('.navbar-list > :nth-child(4)').click()
    cy.get('.mdc-button__label').click()
    cy.get('#name').type(dzematname)
    cy.get('.MuiButtonBase-root').click()
    cy.get('.navbar-list > :nth-child(4)').click()

    cy.get('#searchField').type(dzematname)
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.get('.MuiDataGrid-cell--withRenderer > .MuiButtonBase-root').first().click()

    cy.get('#name').type('{selectall}{backspace}{selectall}{backspace}').type(dzematname)
    cy.get('.MuiButtonBase-root').click()
    cy.get('.navbar-list > :nth-child(4)').click()

    cy.get('#searchField').type(dzematname)
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.get(':nth-child(5) > [data-layer="Content"]').should('be.visible')



  })
  it('QV-6 Verify that a user can delete a džemat entry', () => {
    cy.get('.navbar-list > :nth-child(4)').click()
    cy.get('[data-id="6"] > .MuiDataGrid-cell--withRenderer > .MuiButtonBase-root').click()
    cy.get('#name').clear()
    cy.get('.MuiButtonBase-root').click()

  })
})

