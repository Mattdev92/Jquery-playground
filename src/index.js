import './css/index.scss';
import $ from 'jquery';
import TodoView from './modules/todo-view';

$(() => {
  // create new Todo obeject - build entire app
  const newTodo = new TodoView();
  newTodo.buildMainApp();
  /* page display  */
  //   $('body').css('display', 'inline');
});
