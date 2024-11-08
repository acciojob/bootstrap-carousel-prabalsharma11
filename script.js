//your code here
cy.get('.button-class') // If this matches multiple elements, make it more specific.
cy.get('.button-class').eq(0).click(); // Clicks only the first element.
cy.get('.button-class').click({ multiple: true });
cy.get('.button-class').should('have.length', 1);
cy.get('.parent-class .child-class') // Use parent-child relationships.
cy.get('.button-class').debug();
