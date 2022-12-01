const quadrate = new Array();

for (let index = 0; index <= 100; index++) {
    quadrate.push(index * index);
}

quadrate.forEach(square => {
    console.log(square);
});