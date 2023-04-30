import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  productList: any[] = [];
  total: number = 0;
  constructor() {}
  ngOnInit() {
    this.getProduct();
  }
  ngOnChange() {
    this.getCartTotal();
  }

  getProduct() {
    if ('cart' in localStorage) {
      this.productList = JSON.parse(localStorage.getItem('cart')!);
    }
    console.log(this.productList);
  }

  getCartTotal() {
    this.total = 0;
    for (let i in this.productList) {
      this.total +=
        this.productList[i].data.price * this.productList[i].quantity;
      console.log(this.total);
    }
  }
  minsAmount(index: number) {
    if (this.productList[index].quantity >= 1) {
      this.productList[index].quantity--;
      localStorage.setItem('cart', JSON.stringify(this.productList));
      this.getCartTotal();
    }
  }
  addAmount(index: number) {
    this.productList[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(this.productList));
    this.getCartTotal();
  }
  detectChange() {
    localStorage.setItem('cart', JSON.stringify(this.productList));
    this.getCartTotal();
  }
  deleteProduct(index: number) {
    if (confirm('Do you want to remove the item from the cart?')) {
      this.productList.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.productList));
      this.getCartTotal();
    }
  }
}
