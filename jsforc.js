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
   
// let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let arrAlphabet = alphabet.split("");
// let alphabetOne = arrAlphabet[Math.floor(Math.random()*arrAlphabet.length)];
// let randomString = "";
//     while (randomString.length < 6) {
//         randomString += ; 
        
// }
// console.log (randomString);


// console.log (arrAlphabet[alphabetOne]);

// console.log (alphabetOne);
// console.log (arrAlphabet);


// let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let randomString = "";
//     while (randomString.length < 6) {
//         randomString += alphabet[Math.floor(Math.random()*alphabet.length)]; 
      
// }
// console.log (randomString);

// let input = "javascript is awesome";
// let output = "";

// for (let i = 0; i < input.length; i++) {

// }

// let input = "javascript is awesome";
// let output = "";

// for (let i = 0; i < input.length; i++){
// 	if(input[i] === "a") {
//       	output += 4;
//      }else if (input[i] === "i"){
//         output += 1; 
//      }else if (input[i] === "e"){
//      		output += 3;
//      }else if (input[i] === "o"){
//      		output += 0;
//      }else{
//      		output += input[i];
//      }
// 	}
  
//     console.log (output);


// ___________________________________________________________


// let name = prompt ("Как вас зовут?");
// console.log (name);

// let likesCats = confirm("Тебе нрав кошки?");
// if (likesCats) {
//     console.log ("Ты классная кошка!");
// } else {
//     console.log ("Ок!");
// }

// let likesCats = confirm("Тебе нрав кошки?");
// if (likesCats) {
//     alert ("Ты классная кошка!");
// } else {
//     alert ("Ок!");
// }

// ___________________________________________________________


// ВИСИЛИЦА

// let words = [
//     "программа",
//     "макака",
//     "прекрасный"
// ];
// words.push ("котлета");
// words.unshift ("муха");


// console.log (words);

// let word = words[Math.floor(Math.random() *words.length)];
// console.log (word);
// // случайное слово


// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }
// console.log (answerArray);

// let remainingLetters = word.length;
// console.log (remainingLetters);
// // итоговый массив

// while (remainingLetters > 0) {
//     alert (answerArray.join(" "));
//     let guess = prompt ("Угадайте букву, или нажмите Отмена для выхода из игры");
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Введите одиночную букву.");
//     } else {
//         guess = guess.toLowerCase();
//         for (let j = 0; j < word.length; j++) {
//            if (word[j] === guess) {
//                answerArray[j] = guess;
//                remainingLetters--;
//            } 
//         }
//     } 
// }

// alert (answerArray.join(" "));
// alert ("Отлично! Было загадано слово " + word);
    

// ___________________________________________________________


// ФУНКЦИИ 

// function () {
//     console.log ("Делаем что-то");
// }

// let ourFirstFunction = function () {
//     console.log ("Привет, мир!");
// };
// ourFirstFunction ();

// let sayHelloTo = function (name) {
//     console.log ("Привет, " + name + "!");
// }
// sayHelloTo ("Nick");

// let drawCats = function (howManyTimes) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log (i + " =^.^=");
//     }
// };
// drawCats (5);

// let printMul = function (howManyTimes, whatToDraw) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log (i + " " + whatToDraw);
//     }
// };
    
// printMul (5, "=^.^=");
// printMul (4, "^_^");

// let double = function (number) {
//     return number * 2;
// };
// console.log (double(3));
// console.log (double(5) + double(6));
// console.log (double(double(3)));

// let pickRandomWord = function (words) {
//     return words[Math.floor(Math.random() * words.length)]; 
    
// };
// let randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];
//     console.log (pickRandomWord (randomWords));
//     console.log (pickRandomWord (["Кукушка", "Сом", "Пот"]));

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

// let pickRandomWord = function (words) {
//     return words[Math.floor(Math.random() * words.length)];
// }
// let randomBo = ["глаз","нос","череп"];
// let randomAd = ["вонючий","гнилой","идиотский"];
// let randomWords = ["ножка","крыло","усик","глаз","нос"];
// let randomString = "У " +  pickRandomWord(randomBo) + " ССС " + pickRandomWord(randomAd) + " ККК " + pickRandomWord(randomWords);

// console.log (randomString);

// let pickRandomWord = function (words) {
//     return words[Math.floor(Math.random() * words.length)];
// };

// let generateRandomInsult = function () {
//     let randomBo = ["глаз","нос","череп"];
//     let randomAd = ["вонючий","гнилой","идиотский"];
//     let randomWords = ["ножка","крыло","усик","глаз","нос"];
//     let randomString = "У тебя " + pickRandomWord(randomBo) + " словно " + pickRandomWord(randomAd) + " " + pickRandomWord(randomWords) +"!!!";
//     return randomString;
// };
// console.log (generateRandomInsult ());


// let fifthLetter = function (name) {
//     if (name.length < 5) {
//         return;
//     }
//     return "Пятая буква вашего имени: " + name[4] + ".";
// };
// console.log (fifthLetter (Dmitrii));

// let medalForScore = function (score) {
//     if (score < 3) {
//         return "бронза";
//     }
//     if (score < 7) {
//         return "серебро";
//     }  
//     return "Золото";
// };
// console.log (medalForScore (2));

// let headingElement = document.getElementById("main-heading");
// console.log(headingElement.innerHTML);
// let newHeadingText = prompt ("Введите новый заголовок:");
// headingElement.innerHTML = newHeadingText;
// $("#main-heading").text(newHeadingText);
// console.log(newHeadingText);

// let newHeadingText = prompt ("Введите новый заголовок:");
// $("#main-heading").text(newHeadingText);
// console.log(newHeadingText);

// $("body").append("<p>Это новый параграф</p>");

// for (let i = 0; i < 3; i++) {
//     let hobby = prompt("Назови одно из своих любимых хобби!");
//     $("body").append("<p>" + hobby + "</p>");
// }

// $("h1").fadeOut(7000);

// $("h1").text("Єтот текст скоро исчезнет").fadeOut(4000);

// $("h1").fadeOut(300).fadeIn(2000);
// $("h1").slideUp(1000).slideDown(1000);
// $("h1").fadeOut(1000);
// $("h1").fadeIn(1000);

// for (let i = 0; i < 3; i++) {
//     $("h1").fadeOut(1000);
//     $("h1").fadeIn(1000);
// }

// $("body").append("<p>Это новый параграф</p>");
// for (let i = 0; i < 3; i++) {
//         $("h1").slideUp(1000);
//         $("h1").slideDown(1000);
//     }

// $("body").append("<p>Это новый параграф</p>");
// for (let i = 0; i < 3; i++) {
//         $("h1").fadeOut(1000);
//         $("h1").fadeIn(1000);
//     }

//     $("body").append("<p>Это новый параграф</p>");
// for (let i = 0; i < 3; i++) {
//         $("h1").show(1000);
// //         $("h1").hide(1000);
//     }

// $("#main-heading").text("Мои друзья");

// let friends = ["Федя", "Хабиб", "Андрей"];

// for (let i = 0; i < friends.length; i++) {
//   $("body").append("<p>" + friends[i] + "</p>");
//   $("p").last().hide().fadeIn((i + 1) * 10000);
// }

// $("p").append(" лучший!");

// let fadeTime;
//     for (let i = 0; i < 5; i++) {
//       fadeTime = (i + 1) * 1000;
//       $("#main-heading").fadeOut(fadeTime / 2).fadeIn(fadeTime / 2);
//     }

// let timeUp = function () {
//     alert ("Время вышло!");
// };

// setTimeout (timeUp, 3000);
