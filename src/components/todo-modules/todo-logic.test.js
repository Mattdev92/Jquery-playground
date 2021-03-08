import $ from 'jquery';
import Logic from './todo-logic';

test('if add is defined', () => {
  const logic = new Logic($('input'));
  logic.add();
  const removeButton = document.querySelector('remove_button');
  expect(removeButton).toBeDefined();
});
