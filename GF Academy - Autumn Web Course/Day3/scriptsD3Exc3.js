let NameArr = ['Lucie', 'Alex', 'Zdravko']

NameArr.forEach(student=> {
    if (student !== 'Zdravko')  {
        $ ('ul').append(`<li>${student}</li>`)
    }
    else {
        $('ul').append(`<li><b>${student}</b></li>`);
    }
    
});