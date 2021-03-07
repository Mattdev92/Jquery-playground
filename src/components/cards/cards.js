import $ from 'jquery';

const cardContainer = '<div class="wrapper__card"></div>';
class Card {
  constructor() {
    this.info = 'info';
  }

  getFirstPokemon() {
    $.ajax({ url: 'https://pokeapi.co/api/v2/pokemon/1/' })
      .done(function (data) {
        $('.wrapper')
          .append(cardContainer)
          .children()
          .last()
          .append(`<h5>${data.name}</h5>`);
      })
      .fail(function () {
        console.log('error');
      });
  }

  getMorePokemon() {
    for (let i = 2; i < 20; i++) {
      $.ajax({ url: `https://pokeapi.co/api/v2/pokemon/${i}/` })
        .done(function ({ name }) {
          $('.wrapper')
            .append(cardContainer)
            .children()
            .last()
            .append(`<h5>${name}</h5>`);
        })
        .fail(function () {
          console.log('error');
        });
    }
  }

  createCard() {
    this.getFirstPokemon();
  }
}
export default Card;
