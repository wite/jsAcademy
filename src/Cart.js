module.exports = function Cart() {

	this.items = [];

	this.add = function (shoppingItem) {
		this.items.push(shoppingItem)
	};

	this.getTotalPrice = function (discount = price => 0) {
		var totalPrice = this.items.reduce(function (result, shoppingItem) {
			return result + shoppingItem.getTotalPrice();
		}, 0);
		var priceWithDiscount = totalPrice - discount(totalPrice);
		return priceWithDiscount;
	};

	this.getVipItems = () => this.items.filter(item => item.getPrice() >= 20);

	this.getVipItemsOld = function () {
		return this.items.filter(function (item) {
			return item.getPrice() >= 20;
		});
	}
};