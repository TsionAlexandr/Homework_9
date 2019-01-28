// // Задача 1.


let x = func('a', 'b', 'c', 'd');
let {first, ...rest} = f('a', 'b', 'c', 'd'); 

function func(first, ...rest) {
    return {first, rest};
}





// // Задача 2.


const organisation = {
    name: 'Google',
    info: { employees: 1536, partners: ['Microsoft', 'Facebook', 'Xing'] }

function getInfo (name, info) {
    if (!name) {
        console.log('Unknown');  
    };
    console.log(`Name: ${name}`);
    console.log(`Partners: ${partners[0]}, ${partners[1]}`);
}

getInfo(organisation);