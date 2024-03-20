describe('template spec', () => {
  it('passes', () => {
    
    //Okta Verification
    const loginUsername = '';
    const loginPassword = '';
    const appURL = 'https://cfg-sgl-ui-qa.ad.moodys.net/issuerlist';
    
    cy.origin(
      'https://moodys.oktapreview.com/',
      { args: { loginUsername, loginPassword, appURL } },
      ({ loginUsername, loginPassword, appURL }) => {
        cy.visit(appURL, { timeout: 30000 });
        cy.get('#input28', { timeout: 30000 }).type(loginUsername);
        cy.contains('Next').click();
        cy.get('#input60').type(loginPassword, { log: false });
        cy.get('input[type="submit"]', { timeout: 30000 }).click();
      }
    );

    //Open filter panel
    cy.get('#filterbutton',{timeout: 50000}).click({force: true})
    
    //Selecting first filter value
    cy.get(':nth-child(1) > .field > .field-group > .field-control > .multiselect > .multiselect-field > #ex9',{timeout: 30000}).eq(0).click({force: true}).click({force: true})
    cy.get('.list').contains('Outstanding').click({force: true}).contains('Approved').click({force: true})
        

    //Selecting second filter value
    //cy.get('.grid-cols-3 > :nth-child(2) > .field > .field-group > .field-control > .multiselect > .multiselect-field > #ex9',{timeout: 30000}).click({force: true})
    cy.get('.multiselect-input').eq(1).click({force: true})
    cy.get('blue-list-item[role="option"]').each(function ($ele, index, $list) {
      if($ele.text().includes('SGL-2')){
        cy.wrap($ele).click({force: true});
      }  
      //cy.log($ele.text());
    })
    //cy.get('.list').contains('SGL-2').click({force: true})
    //cy.get('.list').click({multiple: true});
        
    /*(cy.get('blue-list-item[role="option"]')
    .should('have.length.greaterThan', 0)
    .its('length')
    .then(cy.log)
    .then((n) => Cypress._.random(0,n-1))
    .then(cy.log)
    .then((k) => {
      cy.get('blue-list-item[role="option"]').eq(k).click({force: true}).click({force: true});
    })*/
    
    //Selecting third filter value
    cy.get(':nth-child(3) > .field > .field-group > .field-control > .multiselect > .multiselect-field > #ex9',{timeout: 30000}).click({force: true})
    cy.get('.list').contains('True').click({force: true})

    //Selecting fourth filter value
    cy.get(':nth-child(1) > .field > .field-group > .field-control > .multiselect > .multiselect-field > #ex1',{timeout: 30000}).click({force: true})
    cy.get('.list').contains('Ba1').click({force: true})

    //Selecting fifth filter value
    cy.get(':nth-child(2) > :nth-child(2) > .field > .field-group > .field-control > .multiselect > .multiselect-field > #ex9',{timeout: 30000}).click({force: true})
    cy.get('.list').contains('Public').click({force: true})

    //Selecting sixth filter value
    cy.get(':nth-child(3) > .field > .field-group > .field-control > .multiselect > .multiselect-field > #ex2',{timeout: 30000}).click({force: true})
    cy.get('.list').contains('POS').click({force: true})

    
    //Selecting seventh filter value
    //cy.get(':nth-child(3) > :nth-child(1) > .field > .field-group > .field-control > .multiselect > .multiselect-field > #ex3',{timeout: 30000}).click({force: true})
    //cy.get('.list').contains('Sarah Nicolini').click({force: true})

    //Selecting eighth filter value
    cy.get(':nth-child(3) > :nth-child(2) > .field > .field-group > .field-control > .multiselect > .multiselect-field > #ex2',{timeout: 30000}).click({force: true})
    cy.get('.list').contains('Varun Mandhana').click({force: true})

    //Selecting ninth filter value
    cy.get(':nth-child(3) > :nth-child(3) > .field > .field-group > .field-control > .multiselect > .multiselect-field > #ex1',{timeout: 30000}).click({force: true})
    cy.get('.list').contains('Ivan Palacios').click({force: true})

    //Selecting tenth filter value
    cy.get(':nth-child(4) > :nth-child(1) > .field > .field-group > .field-control > .multiselect > .multiselect-field > #ex3',{timeout: 30000}).click({force: true})
    cy.get('.list').contains('Services').click({force: true})

    //Selecting eleventh filter value
    //cy.get(':nth-child(4) > :nth-child(2) > .field > .field-group > .field-control > .multiselect > .multiselect-field > #ex2',{timeout: 30000}).click({force: true})
    //cy.get('.list').contains('France').click({force: true})

    //Selecting twelfth filter value
    cy.get(':nth-child(4) > :nth-child(3) > .field > .field-group > .field-control > .multiselect > .multiselect-field > #ex1',{timeout: 30000}).click({force: true})
    cy.get('.list').contains('Europe, Middle East & Africa').click({force: true})

    cy.get('.filter-group-controls > :nth-child(1)').click({force: true})
  })
})

