import $ from 'jquery';

// declare main object, which will build entire app
class Nav {
  constructor(item) {
    this.item = item;
    this.nav = $('nav');
  }

  buildNav() {
    const { item, nav } = this;
    // build Nav structure
    nav.append(item);
  }
}
export default Nav;
