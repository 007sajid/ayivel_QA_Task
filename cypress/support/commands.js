// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-localstorage-commands";
Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self'); 
      });
});



Cypress.Commands.add('auth', () => { 
  cy.request(
    {
    method: 'POST',
    url: 'https://restful-booker.herokuapp.com/auth',
    headers:{
      'content-type': 'application/json'
    },
    body: {
       
        username: 'admin',
        password: 'password123',
      
    }
  }
  ).its('body')
  .then(body => {
    console.log("this incoma",body.token)
    cy.setLocalStorage("jwt", body.token);
  })
});