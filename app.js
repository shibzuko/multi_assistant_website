let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";



let mario = document.getElementById("gpt-3.5-4k"); //получаем кнопку активировать/деактивировать
mario.addEventListener("click", function(){
	tg.MainButton.setText("Сообщение отправлено!");
	tg.MainButton.show();
	tg.sendData("gpt-3.5-turbo-0613");
});


let albert = document.getElementById("gpt-3.5-16k");
albert.addEventListener("click", function(){
	tg.MainButton.setText("Сообщение отправлено!");
	tg.MainButton.show();
	tg.sendData("gpt-3.5-turbo-16k-0613");
});

let mario = document.getElementById("gpt-4-8k"); //получаем кнопку активировать/деактивировать
mario.addEventListener("click", function(){
	tg.MainButton.setText("Сообщение отправлено!");
	tg.MainButton.show();
	tg.sendData("gpt-4-0613");
});


let albert = document.getElementById("gpt-4-32k");
albert.addEventListener("click", function(){
	tg.MainButton.setText("Сообщение отправлено!");
	tg.MainButton.show();
	tg.sendData("gpt-4-32k-0613");
});