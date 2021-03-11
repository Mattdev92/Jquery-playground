import $ from 'jquery';
import Logic from './todo-logic';

test('if add is defined', () => {
  document.body.innerHTML = '<ol></ol>';
  const logic = new Logic($('input'));
  logic.add();
  const removeButton = $('.remove_button').length;
  expect(removeButton).toEqual(1);
});
