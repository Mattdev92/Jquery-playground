import $ from 'jquery';

// declare html elements
const pokeCard = '<ul></ul>';

// declare main object, which will build entire app
class Todo {
  constructor() {
    this.container = $('.wrapper');
  }

  displayPokemons() {
    const { container } = this;
    // build document structure
    container.append(pokeCard);
  }
}
export default Todo;
