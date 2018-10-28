let number = 0;
$('button').on('click', (event) => {
  event.preventDefault();
  number = number + 1;
  $('h2').text(`${number }`);
});