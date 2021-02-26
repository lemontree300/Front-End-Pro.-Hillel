/*1) Выведите на экран зарплату Пети и Коли.
var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};*/
var obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' };
console.log(`zarplata Peti----> ${obj['Петя']}
zarplata Koli----> ${obj['Коля']}`);

/*2) Дан многомерный массив arr:
var arr = {
    'ru':['голубой', 'красный', 'зеленый'],
    'en':['blue', 'red', 'green'],
    };
Выведите с его помощью слово 'голубой'.*/
var arr = {
    'ru': ['голубой', 'красный', 'зеленый'],
    'en': ['blue', 'red', 'green'],
};
var functionArr = function () {
    console.log(arr['ru'][0]);
}
functionArr();

/*3) дан обьект
var arr = {
    'ru':['голубой', 'красный', 'зеленый'],
    };
При помощи get set, сделать так что бы при передачи добавлялся цвет а при set выводились все цвета*/
var arr2 = {
    'ru2': ['голубой', 'красный', 'зеленый'],
    get moreColors() {
        oldColors = new Object(this['ru2']);
        newColors = new Object();
        return `${this.oldColors}, ${this.newColors}`
    },
    set moreColors(moreColors) {
        moreColors = `${this.oldColors}, ${this.newColors}`
    }
};
var newColors = 'black';
console.log(newColors);
console.log(arr2.moreColors);