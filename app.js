let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";



let gpt_3_5_4k = document.getElementById("gpt-3.5-4k"); //получаем кнопку активировать/деактивировать
mario.addEventListener("click", function(){
	tg.MainButton.setText("Сообщение отправлено!");
	tg.MainButton.show();
	tg.sendData("gpt-3.5-turbo-0613");
});

let gpt_3_5_16k = document.getElementById("gpt-3.5-16k");
albert.addEventListener("click", function(){
	tg.MainButton.setText("Сообщение отправлено!");
	tg.MainButton.show();
	tg.sendData("gpt-3.5-turbo-16k-0613");
});

let gpt_4_8k = document.getElementById("gpt-4-8k"); //получаем кнопку активировать/деактивировать
mario.addEventListener("click", function(){
	tg.MainButton.setText("Сообщение отправлено!");
	tg.MainButton.show();
	tg.sendData("gpt-4-0613");
});

let gpt_4_32k = document.getElementById("gpt-4-32k");
albert.addEventListener("click", function(){
	tg.MainButton.setText("Сообщение отправлено!");
	tg.MainButton.show();
	tg.sendData("gpt-4-32k-0613");
});