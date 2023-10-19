let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault(); // Предотвращаем отправку формы

    // Извлечение данных
    let formData = new FormData(event.target); // event.target - это наша форма

    let model = formData.get("model");
    let numTokens = formData.get("num_tokens");
    let temperature = formData.get("temperature");
    let comment = formData.get("promt");

    // Отправка данных в Telegram
    tg.MainButton.setText("Сообщение отправлено!");
    tg.MainButton.show();

    // Вы можете форматировать сообщение так, как вам нужно
    let message = {
    'Model': `${model}`,
    'Tokens': `${numTokens}`,
    'Temperature': `${temperature}`,
    'Comment': `${comment}`
    };

    tg.sendData(message); // Отправка данных
});



//let gpt_3_5_4k = document.getElementById("gpt-3.5-4k"); //получаем кнопку активировать/деактивировать
//gpt_3_5_4k.addEventListener("click", function(){
//	tg.MainButton.setText("Сообщение отправлено!");
//	tg.MainButton.show();
//	tg.sendData("gpt-3.5-turbo-0613");
//});
//
//let gpt_3_5_16k = document.getElementById("gpt-3.5-16k");
//gpt_3_5_16k.addEventListener("click", function(){
//	tg.MainButton.setText("Сообщение отправлено!");
//	tg.MainButton.show();
//	tg.sendData("gpt-3.5-turbo-16k-0613");
//});
//
//let gpt_4_8k = document.getElementById("gpt-4-8k"); //получаем кнопку активировать/деактивировать
//gpt_4_8k.addEventListener("click", function(){
//	tg.MainButton.setText("Сообщение отправлено!");
//	tg.MainButton.show();
//	tg.sendData("gpt-4-0613");
//});

//let gpt_4_32k = document.getElementById("gpt-4-32k");
//gpt_4_32k.addEventListener("click", function(){
//	tg.MainButton.setText("Сообщение отправлено!");
//	tg.MainButton.show();
//	tg.sendData("gpt-4-32k-0613");
//});