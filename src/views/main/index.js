import '../../css/index.scss';
import $ from 'jquery';
import TodoView from '../../components/todo-modules/todo-view';

$(() => {
  // create new Todo obeject - build entire app

  const newTodo = new TodoView();
  newTodo.buildTodo();
});
