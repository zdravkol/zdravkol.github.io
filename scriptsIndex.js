$('button').on('click', event => {
    event.preventDefault();
    let title=$('input').val();
    $('.NewPost').append(`<p>${title}<\p>`);
    
    let text=$('textarea').val();
    $('.NewPost').append(`<p>${text}<\p>`)
    
    let path= posts/teaheart/1
    let SaveData = {
        title: $('input').val(), 
        text: $('textarea').val()
    }
    $('input').val("")
    $('textarea').val("")
    fb.ref(path).set(SaveData);
})

fb.ref("posts/teaheart").once('value').then(data => {
    let savedPosts = data.val();
    savedPosts.forEach(blogPost => {
         $('body').append(`<h2>${blogPost.title}<\h2>`)
         $('body').append(`<h6>${blogPost.text}<\h6>`)
     })
})
