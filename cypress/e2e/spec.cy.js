describe('dzemat menagament', () => {
  it('QV1 Verify that a user can successfully log in', () => {
  cy.visit('https://dzematmgmt-dev.uradinesto.ba/login')    
  cy.get('#usernameOrEmail').type('admin')
  cy.get('#password').type('admin')
  cy.get(':nth-child(3) > .MuiButtonBase-root').click()
  cy.get('.logo-img').should('be.visible')
  })
  it('QV3 Verify that a user can add a new džemat entry', () => {
  cy.visit('https://dzematmgmt-dev.uradinesto.ba/login')    
  cy.get('#usernameOrEmail').type('admin')
  cy.get('#password').type('admin')
  cy.get(':nth-child(3) > .MuiButtonBase-root').click()
  cy.get('.navbar-list > :nth-child(4)').click()
  cy.get('.mdc-button__label').click()
  cy.get('#name').type('Nevacka')
  cy.get('.MuiButtonBase-root').click()
    })
    it('QV3 Verify that a user can add a new džemat entry', () => {
      cy.visit('https://dzematmgmt-dev.uradinesto.ba/login')    
      cy.get('#usernameOrEmail').type('admin')
      cy.get('#password').type('admin')
      cy.get(':nth-child(3) > .MuiButtonBase-root').click()
      cy.get('.navbar-list > :nth-child(4)').click()
      cy.get('#searchField').type('Porijecani')
      cy.get('[aria-colindex="2"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle').should('be.visible')
     

    })
    it('QV-5 Verify that a user can edit an existing džemat', () => {
      cy.visit('https://dzematmgmt-dev.uradinesto.ba/login')    
      cy.get('#usernameOrEmail').type('admin')
      cy.get('#password').type('admin')
      cy.get(':nth-child(3) > .MuiButtonBase-root').click()
      cy.get('.navbar-list > :nth-child(4)').click()
      cy.get('[data-id="7"] > [data-field="name"] > .MuiDataGrid-cellContent').click()
      cy.get('#name').type('Porijecani')
      cy.get('.MuiButtonBase-root').click()
      

      
    })
    it('QV-6 Verify that a user can delete a džemat entry', () => {
      cy.visit('https://dzematmgmt-dev.uradinesto.ba/login')    
      cy.get('#usernameOrEmail').type('admin')
      cy.get('#password').type('admin')
      cy.get(':nth-child(3) > .MuiButtonBase-root').click()
      cy.get('.navbar-list > :nth-child(4)').click()
      cy.get('[data-id="6"] > .MuiDataGrid-cell--withRenderer > .MuiButtonBase-root').click()
      cy.get('#name').clear()
      cy.get('.MuiButtonBase-root').click()
    
    })
  })
