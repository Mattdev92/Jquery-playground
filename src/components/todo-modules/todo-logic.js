import $ from 'jquery';

class Logic {
  constructor(input) {
    this.input = input;
  }

  add() {
    const { input } = this;
    const value = input.val();
    if (value === '') {
      return;
    }
    $('ol')
      .append(`<li>${value}</li>`)
      .children()
      .last()
      .append(`<button class="remove_button">DELETE</button>`);
    $('input').val('');
  }

  removeItem(item) {
    item.parent().remove();
  }
}
export default Logic;
