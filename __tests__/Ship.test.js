
const {Ship} = require('../src/Ship.js');

describe('Ship',() => {
    //holds the variables we need to generate//
    let ship;

    beforeEach(()=> {
        ship = new Ship("Dover");
    })

it('checking if an instance of ship can be created', () => {
    expect (new Ship()).toBeInstanceOf(Ship);
});

it('Has a starting port', () => {
    expect(ship.startingPort).toBe('Dover');
})



});