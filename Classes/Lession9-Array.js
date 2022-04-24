let fruits =[ 'Mango','Apple'];
let itemCount =fruits.length;

fruits.push('orange');
fruits.unshift('Jackfruit');

let names = 'smriti,sajina,shreya';
let nameArray = names.split(',');

const nameString = nameArray.join(',');

const index = fruits.indexOf('Mango');
const isMngoThere = fruits.includes('Mango');

fruits.splice(-2, 2, 'berry', 'grapes');

for(let fruit of nameArray)
{
    console.log(fruits);
}

let x = [[1, 2, 3], [4, 5, 6]];

let t = x[1][1];