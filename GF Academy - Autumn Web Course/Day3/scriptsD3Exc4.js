let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using javascript's jQuery framework. How awesome!"
};
$('div').append(`<h2>${additionalBlock.title}</h2>`);
$('div').append(`<p>${additionalBlock.text}</p>`);


