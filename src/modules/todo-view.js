import $ from 'jquery';
import Logic from './todo-logic';
import Events from './todo-events';
// declare html elements
const formChildren = [
  '<input class="input_main">',
  '<button class="btn">ADD</button>',
  '<ol></ol>',
];
// declare main object, which will build entire app
class Todo {
  constructor() {
    this.form = $('#form');
    this.input = 'input';
  }

  buildMainApp() {
    const { form, input } = this;
    // build document structure
    formChildren.map((item) => form.append(item));
    // decalre Logic
    const logic = new Logic($(input));
    // decalre Events used in app.
    const events = new Events(logic);
    events.addEvent();
    events.removeEvent();
  }
}
export default Todo;
