import $ from 'jquery';

class EmitEvents {
  constructor(logic) {
    this.logic = logic;
  }

  addEvent() {
    $(`.btn`).on('click', (e) => {
      e.preventDefault();
      this.logic.add();
    });
  }

  removeEvent() {
    const { logic } = this;
    $('ol').on('click', "button[class='remove_button']", function (e) {
      const item = $(this);
      e.preventDefault();
      logic.removeItem(item);
    });
  }
}

export default EmitEvents;
