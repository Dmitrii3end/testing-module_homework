// Факториал числа n (n!) — это произведение натуральных чисел от 1 до n. Напишите функцию fac(n).

const fac = n => {
    if (typeof n != 'number') return undefined;
    if (n % 1 !== 0) return undefined;
    if (n === 0) return 1;

    return (n < 0) ? n * fac(-n - 1) : n * fac(n - 1);


}

module.exports = fac;