// var a = 5;

// {
//     let a = 10;
//     console.log(a);
    
// }

// const b  = 10;

// function func() {
//     console.log(1 + 5);
    
// }

// const sprid = (...args) =>  {
//     console.log(args);
    
// }

// sprid(1, 2, 3, 4, 5, 6);



// const arr = ()  => {
// return [1, 2, 3, 4]
// }

// let [a, b, c, d, e] = arr();
// console.log('Number', a);
// console.log('Number', e);
// console.log('Number', d);


const obj = () => {
    return {
        a:1,
        b:2,
        c:3,
    }
}

let {a: x, b: t, c: l} = obj();

// let [x, m, k] = obj();
console.log(x);
console.log(t);
console.log(l);
console.log('цифры: ${x} fdf');


