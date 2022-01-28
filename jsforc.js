// alert (1);
// ___________________________________________________________

// let drowCats = function (howManyTimes) {
//    for (let i = 0; i < howManyTimes; i++) {
    //    console.log (i + " =^.^=");
//    } 
// };
// drowCats (5);
// 
// ___________________________________________________________

// let baloon = (15 + 9) *2;
// alert (baloon);
// ___________________________________________________________

// let baloon = (15 + 9) *2;
    // console.log (baloon);
// ___________________________________________________________

// let script = "Java";
// console.log (script.length);

// ___________________________________________________________

// let hello = "эЙ кАК деЛа";
// let lowerString = hello.toLowerCase ();
// let upString = hello.toUpperCase ();
// let fitstLetter = upString [0];
// let secondWord = lowerString.slice (1);
// let newWord = fitstLetter + secondWord;
// console.log (newWord);

// ___________________________________________________________

// let age = 11;
// let accompanied = true;
// let goToCinema = age > 11 || (age <= 11 && accompanied);
// console.log (goToCinema);

// __________________________________________________________

// let homeRoad = [];
// homeRoad.push ("мой дом");
// homeRoad.push ("дорожка к дому");
// homeRoad.push ("мигающий фонарь");
// homeRoad.push ("протикающий гидрант");
// homeRoad.push ("пожарка");
// homeRoad.push ("приют");
// homeRoad.push ("моя школа");
// homeRoad.push ("мой подруги");
// console.log (homeRoad);
// homeRoad.pop ();
// console.log (homeRoad);
// homeRoad.pop ();
// console.log (homeRoad);

// __________________________________________________________

// let number = Math.floor (Math.random () *4);
// console.log (number);

// __________________________________________________________

// let phrases = [
//     "Звучит неплохо",
//     "Да, это определенно надо сделать",
//     "Это хорошая идея",
//     "Может, не сегодня?",
//     "Комьютер говорит нет"
// ];
// console.log (phrases[Math.floor (Math.random () *5)]);

// let randomPhrases = Math.floor(Math.random()*5);
// console.log (phrases[randomPhrases]);

// __________________________________________________________

// let randomBodyParts = ["глаз","нос","череп"];
// let randomAdjectives = ["вонючая","гнилая","идиотская"];
// let randomWords = ["муха","прищепка","ад","палец","крыса"];
// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// let randomWord = randomWords[Math.floor(Math.random() * 5)];
// let result = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " +  randomWord + "!!!"; 
//  console.log (result);

// let randomBodyParts = ["глаз","нос","череп"];
// let randomAdjectives = ["вонючий","гнилой","идиотский"];
// let randomWords = ["ножка","крыло","усик","глаз","нос"];
// let randomanimals = ["оленя","слона","быка","мартышки","кита"];
// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// let randomWord = randomWords[Math.floor(Math.random() * 5)];
// let randomanimal = randomanimals[Math.floor(Math.random() * 5)];
// // let result = "У тебя " + randomBodyPart + " еще более " + randomAdjective + " чем " +  randomWord + " у " + randomanimal; 
// // let result = ["У тебя", randomBodyPart, "еще более", randomAdjective, "чем", randomWord, "у", randomanimal+ "!!!"].join(" ");
//  console.log (result);

// let numbers = [ 3, 2, 1];
// let numbers1 = numbers[0];
// let numbers2 = numbers[1];
// let numbers3 = numbers[2];
// let numbersNew = [numbers1, "больше, чем", numbers2,"больше, чем", numbers3].join (" ");
// console.log (numbersNew);

// __________________________________________________________

// ОБЬЕКТЫ

// Object.keys() - показывает все ключи обьекта 
// cat["name"] и cat.name доступ к значениеям через ключ
 
// добавить элемент в обьект
// let cat = {};
// cat ["legs"] = 3;
// cat ["mame"] = "Гармония";
// cat ["color"] = "Красный";
// console.log (cat);

// let cat = {};
// cat.legs = 3;
// cat.name = "Гармония";
// cat.color = "Красный";
// console.log (cat);

// let owedMoney = {};
// owedMoney.Jimmy = 5;
// owedMoney.Anna = 7;
// owedMoney.Jimmy += 3;
// console.log (owedMoney.Jimmy);
// console.log (owedMoney);

// let movies = {
//     "В поисках Немо": {
//         releaseDate: 2003,
//         duration: 100,
//         actors: ["Альберт Брукс", "Эллен Дедж", "Алекс Гоулд"],
//         format: "DVD"
//     },
//     "Звездные войны": {
//         releaseDate: 1983,
//         duration: 134,
//         actors: ["Марк", "Хариссон", "Кери"],
//         format: "DVD"  
//     },
//     "Гарри Поттер": {
//         releaseDate: 2005,
//         duration: 157,
//         actors: ["Дениель", "Ємма", "Руперт"],
//         format: "Blu-ray"  
//     }
// };

// let findingNemo = movies ["В поисках Немо"];
// console.log (findingNemo.format);
// console.log (Object.keys(movies));

// let scores = {};
// scores.Jhon = 3;
// scores.Iren = 5;
// scores.Klar = 4;
// scores.Iren += 5;
// scores.Klar += 3;
// console.log (scores);

// let myCrazyObject = {
//     "name" : "Нелепый объект",
//     "some array" : [7, 9, { purpose: "пуаница", number: 123 }, 3.3],
//     "random animal": "Банановая акла"
// };
// console.log (myCrazyObject["some array"][2].number);


// __________________________________________________________

// IF ELSE

// let name = "Ник";
// console.log ("Привет, " + name);
// if (name.length > 6) {
//     console.log ("Ну и длинное же у вас имя");
// } else {
//     console.log ("Имя у вас не из длинных");
// }

// let name = "Тома";
// let nameFather = "Сергей";
// let nameMother = "Тома";

// if (name === "Дима") {
//     console.log ("Привет мне!");
// } else if (name === "Сергей") {
//     console.log ("Привет папа!");
// } else if (name === "Тома") {
//     console.log ("Привет мама!");
// } else {
//     console.log ("Привет незнакомец!");
// }

// ЦИКЛЫ

// let sheepCounted = 0;
// while (sheepCounted < 10) {
//     console.log ("Подсчитано овец: " + sheepCounted + "!");
//     sheepCounted++;
// }
// 

// for (let sheepCounted = 0; sheepCounted < 12; sheepCounted++) {
//     console.log ("Подсчитано овец: " + sheepCounted + "!");
// }
// console.log ("апппппппппш");

// let timesToSayHello = 3;
// for (let i = 0; i < timesToSayHello; i++) {
//     console.log ("привет");
// }
// console.log ("в");

// let animals = ["лев", "фламинго", "медведь", "удав"];
// for (let i = 0; i < animals.length; i++) {
//     console.log ("в этом зоопарке есть " + animals[i] + ".");
// }

// let name = "Dima";
// for (let i = 0; i < name.length; i++) {
//     console.log ("В моем имени есть буква " + name[i] + ".");
// }

// for (let x = 2; x < 10000; x = x * 2) {
//     console.log (x);
// }

// for (let x = 3; x < 10000; x = x * 3) {
//     console.log (x);
// }


// let number = 3;
// while (number < 10000) {
//     console.log (number);
//     number *= 3;
// }

// let animals = ["лев", "фламинго", "медведь", "удав"];
// for (let i = 0; i < animals.length; i++) {
//     console.log ("в этом зоопарке есть " + animals[i] + ".");
// }

// let animals = ["Кот", "Рыба", "Лемур", "Комодский Варан"];
// for (let i = 0; i < animals.length; i++) {
//     console.log (" " + animals[i] + "- прекрасное живтоное");
// }

// let animals = ["Кот", "Рыба", "Лемур", "Комодский Варан"];
//     console.log (animals.length);

// let animals = ["Кот", "Рыба", "Лемур", "Комодский Варан"];
// for (let i = 0; i < animals.length; i++) {
//     console.log (" " + animals[i] + "- прекрасное живтоное");

// }


// let animals = ["Кот", "Рыба", "Лемур", "Комодский Варан"];
// for (let i = 0; i < animals.length; i++) {
//     animals[i] = animals[i] + "- прекрасное живтоное";
// }

// console.log (animals);

// let phrases = [
//     "Звучит неплохо",
//     "Да, это определенно надо сделать",
//     "Это хорошая идея",
//     "Может, не сегодня?",
//     "Комьютер говорит нет"
// ];
// console.log (phrases[Math.floor (Math.random () *5)]);

// let randomPhrases = Math.floor(Math.random()*5);
// console.log (phrases[randomPhrases]);

// let number = 3;
// while (number < 10000) {
//     console.log (number);
//     number *= 3;
// }
   
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let alphabetOne = Math.floor(Math.random()*alphabet.length);
console.log (alphabetOne);

// let randomString = "";
//     while (randomString < 6) {
//         console.log (randomString);
//         randomString += alphabetOne; 
// }
// console.log (randomString);

