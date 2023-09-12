let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    tg.MainButton.setText("Сообщение отправлено!");
    tg.MainButton.show();
    tg.sendData("sendTestMessage");
});



let mario = document.getElementById("mario"); //получаем кнопку активировать/деактивировать
mario.addEventListener("click", function(){
	tg.MainButton.setText("Сообщение отправлено!");
	tg.MainButton.show();
	tg.sendData("mario111");
});


let albert = document.getElementById("albert");
albert.addEventListener("click", function(){
	tg.MainButton.setText("Сообщение отправлено!");
	tg.MainButton.show();
	tg.sendData("albert111");
});