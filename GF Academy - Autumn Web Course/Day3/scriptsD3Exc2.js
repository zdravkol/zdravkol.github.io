let color = 'purple';
let number = 10;
let word = 'cool';
if (color === 'purple') {
 $('.North').css('background-color', 'purple')
}
if (number > 100) {
    $('.East').text('Woah thats a big number')
} 
else {
    $('.East').text('Thats just a regular number');
} 
if (word = 'cool') {
    $('.South').text('Power of DOM');
}
else {
        $('.West').text('Power of DOM');
    }
