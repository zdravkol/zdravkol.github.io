// not sure about keyup?
$('button').on('click', event => {
    event.preventDefault();
    let text = $("input").val()
     $('ul').append(`<li>${text}</li>`);
     $('input').val("")
})
