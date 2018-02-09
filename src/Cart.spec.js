import ShoppingItem from './ShoppingItem';

var Cart = require('./Cart');

var discount = function (percent) {
	return function (totalPrice) {
		return totalPrice * percent;
	}
};

describe('Cart', function () {

	it('should return total cost of all products', function () {
		// given
		var cart = new Cart();
		cart.add(new ShoppingItem('apple', 3, 10));
		cart.add(new ShoppingItem('banana', 2, 20));
		var expectedResult = 70;

		// when
		var result = cart.getTotalPrice();

		// then
		expect(result).toBe(expectedResult)
	});

	it('should return all vip items', function () {
		// given
		var apple = new ShoppingItem('apple', 3, 10);
		var banana = new ShoppingItem('banana', 3, 20);
		var cart = new Cart();
		cart.add(apple);
		cart.add(banana);
		var expectedResult = [banana];

		// when
		var result = cart.getVipItems();

		// then
		expect(result).toEqual(expectedResult)
	});

	it('should return total cost with discount of all products', function () {
		// given
		var cart = new Cart();
		cart.add(new ShoppingItem('apple', 3, 10));
		cart.add(new ShoppingItem('banana', 2, 20));
		var expectedResult = 35;

		// when
		var result = cart.getTotalPrice(discount(.5));

		// then
		expect(result).toBe(expectedResult)
	});
});