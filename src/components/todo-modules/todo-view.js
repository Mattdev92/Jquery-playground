import $ from 'jquery';
import Logic from './todo-logic';
import Events from './todo-events';
import Nav from '../nav/nav-view';

// declare html elements
const list = '<ul></ul>';
const navChildren = ['TODO', 'JS P L A Y G R O U N D ', 'API'];
const links = ['#Todo', './index.html', './api.html'];
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

  buildTodo() {
    // build Nav
    const Navi = new Nav(list);
    Navi.buildNav();
    const { form, input } = this;
    // build document structure
    Navi.nav
      .children()
      .append(
        navChildren.map(
          (item, i) => `<li><a href="${links[i]}">${item}</a></li>`
        )
      );
    formChildren.map((item) => form.append(item));
    // decalare Logic
    const logic = new Logic($(input));
    // decalare Events used in app.
    const events = new Events(logic);
    events.addEvent();
    events.removeEvent();
  }
}
export default Todo;
