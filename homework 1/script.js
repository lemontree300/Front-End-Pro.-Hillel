var cylinderHeight = prompt('Расчет объема цилиндра. Введите высоту цилиндра');

var cylinderRadius = prompt('А теперь введите радиус цилиндра');

var cylinderArea = cylinderRadius ** 2 * Math.PI;

var cylinderVolume = cylinderArea * cylinderHeight;

console.log('cylinderHeight--> ', cylinderHeight);

console.log('cylinderRadius--> ', cylinderRadius);

console.log('cylinderArea--> ', cylinderArea);

console.log('cylinderVolume--> ', cylinderVolume);

alert('Объем цилиндра с площадью основы ' + cylinderArea + ', радиусом ' + cylinderRadius + ' и высотой ' + cylinderHeight + ' равен ' + cylinderVolume + ' .');