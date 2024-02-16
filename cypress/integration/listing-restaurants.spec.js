describe('Listing Restaurants', () => {
    it('shows restaurants from the server', () => {
      const sushiPlace = 'Sushi Place';
      const pizzaPlace = 'Pizza Place';
  
      cy.intercept('GET', 'https://api.outsidein.dev/mtyNwCuXbA9G7MfdHuM04XhO8jBJZBko/restaurants',
        {id: 801, name: sushiPlace},
        {id: 802, name: pizzaPlace},
      );
  
      cy.visit('http://localhost:3000');
      cy.contains(sushiPlace);
      cy.contains(pizzaPlace);
    });
  });