import $ from 'jquery';

export const getMorePoke = (getMore) => {
  $('.button-wrapper__btn').on('click', () => getMore());
};
