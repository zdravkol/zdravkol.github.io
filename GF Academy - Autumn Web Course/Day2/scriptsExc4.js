let names = ['Alex', 'Lucie', 'Aze'];
names.forEach(name => {
    console.log(names);
});
names.forEach(name => {
    console.log('Ahoj ' + names);
});
names.push('Zdravko');
names.forEach(name => {
    if (name !== "Zdravko") {
        console.log("Ahoj " + name);
    }
    else {
        console.log("You are Zdravko");
    }
});
