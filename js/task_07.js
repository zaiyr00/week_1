/* TASK 7 */
var age = prompt("Введите ваш возраст: ");

if (age > 0 && age <= 13){
    alert("Рекомендую тебе посмотреть мультфильм Алладин");
} else if (age >= 14 && age <= 17){
    alert("Рекомендую вам посмотреть фильм Черная Пантера");
} else if (age >= 18){
    alert("Рекомендую вам посмотреть фильм Крестный Отец");
} else if(isNaN(age)){
    alert("Ошибка!");
}