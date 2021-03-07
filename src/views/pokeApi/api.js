import '../../css/api.scss';
import $ from 'jquery';
import Nav from '../../components/nav/nav-view';
import Cards from '../../components/cards/cards';
import { getMorePoke } from '../../components/cards/cards-events';

$(function () {
  // build Nav
  const Navi = new Nav('POKE API');
  Navi.buildNav();
  // create Cards
  const pokeCards = new Cards();
  pokeCards.createCard();
  // create button
  const button =
    '<div class="button-wrapper"><button class="button-wrapper__btn">MORE</button></div>';
  $('.wrapper').after(button);
  // add event listener on MORE button to get more Pokemons
  getMorePoke(pokeCards.getMorePokemon);
});
