describe('Welcome Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display the welcome header', () => {
    cy.get('[data-testid="welcome-h1"]')
      .should('exist')
      .and('contain.text', 'Bem-vindo(a)!');
  });

  it('should display the welcome paragraph', () => {
    cy.get('[data-testid="welcome-p"]')
      .should('exist')
      .and('contain.text', 'Clique aqui para iniciar seu pedido');
  });

  it('should display the action button', () => {
    cy.get('[data-testid="welcome-button"]')
      .should('exist')
      .and('contain.text', 'Iniciar');
  });
});

describe('Pizza Sizes Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');

    cy.get('[data-testid="welcome-button"]').click();
  });

  it('should display the component title', () => {
    cy.get('[data-testid="sizes-title"]')
      .should('exist')
      .and('contain.text', 'Selecione o tamanho da sua pizza');
  });

  it('should click on the small size and show how many slices', () => {
    cy.get('[data-testid="sizes-small"]').click();
    cy.get('[data-testid="sizes-slices-small"]')
      .should('exist')
      .and('contain.text', '6 fatias');
  });

  it('should click on the medium size and show how many slices', () => {
    cy.get('[data-testid="sizes-medium"]').click();
    cy.get('[data-testid="sizes-slices-medium"]')
      .should('exist')
      .and('contain.text', '8 fatias');
  });

  it('should click on the large size and show how many slices', () => {
    cy.get('[data-testid="sizes-large"]').click();
    cy.get('[data-testid="sizes-slices-large"]')
      .should('exist')
      .and('contain.text', '12 fatias');
  });
});

describe('Pizza Flavors Components Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-testid="welcome-button"]').click();
    cy.get('[data-testid="sizes-large"]').click();
  });

  it('should display the component title', () => {
    cy.get('[data-testid="flavors-title"]')
      .should('exist')
      .and('contain.text', 'Selecione o sabor da sua pizza');
  });

  it('should display all the flavors', () => {
    cy.get('[data-testid="flavors-calabresa"]')
      .should('exist')
      .and('contain.text', 'Calabresa');

    cy.get('[data-testid="flavors-marguerita"]')
      .should('exist')
      .and('contain.text', 'Marguerita');

    cy.get('[data-testid="flavors-portuguesa"]')
      .should('exist')
      .and('contain.text', 'Portuguesa');
  });
});

describe('Pizza Adicionals Components Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-testid="welcome-button"]').click();
    cy.get('[data-testid="sizes-large"]').click();
    cy.get('[data-testid="flavors-button"]').click();
  });

  it('should display the component title', () => {
    cy.get('[data-testid="adicionals-button"]')
      .should('exist')
      .and('contain.text', 'Personalizar pizza');
  });

  it('should display all the adicionals', () => {
    cy.get('[data-testid="adicionals-button"]').click();

    cy.get('[data-testid="adicionals-extra-bacon"]')
      .should('exist')
      .and('contain.text', 'Extra bacon');

    cy.get('[data-testid="adicionals-no-onion"]')
      .should('exist')
      .and('contain.text', 'Sem cebola');

    cy.get('[data-testid="adicionals-border"]')
      .should('exist')
      .and('contain.text', 'Borda recheada');
  });
});