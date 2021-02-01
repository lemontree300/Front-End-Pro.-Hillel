var whatAge = +prompt('Сколько лет?');

var whatSmoke = prompt('Куришь?');

console.log('whatAge--> ', whatAge);
console.log('whatSmoke--> ', whatSmoke);

if ((whatAge < 18) && (whatSmoke === 'Нет' || whatSmoke === 'Ні' || whatSmoke === 'No' || whatSmoke === 'Nope' || whatSmoke === 'нет' || whatSmoke === 'ні' || whatSmoke === 'no' || whatSmoke === 'nope')) {
    alert('Так держать!');
} else if ((whatAge < 18) && (whatSmoke === 'Да' || whatSmoke === 'Так' || whatSmoke === 'Yes' || whatSmoke === 'Yep' || whatSmoke === 'да' || whatSmoke === 'так' || whatSmoke === 'yes' || whatSmoke === 'yep')) {
    alert('Маме раскажу!');
} else if ((whatAge === 18 || whatAge > 18) && (whatSmoke === 'Нет' || whatSmoke === 'Ні' || whatSmoke === 'No' || whatSmoke === 'Nope' || whatSmoke === 'нет' || whatSmoke === 'ні' || whatSmoke === 'no' || whatSmoke === 'nope')) {
    alert('Молодец, и не надо!');
} else if ((whatAge === 18 || whatAge > 18) && (whatSmoke === 'Да' || whatSmoke === 'Так' || whatSmoke === 'Yes' || whatSmoke === 'Yep' || whatSmoke === 'да' || whatSmoke === 'так' || whatSmoke === 'yes' || whatSmoke === 'yep')) {
    alert('Ну и зря!');
} else {
    alert('Программа сломалась(((');
}