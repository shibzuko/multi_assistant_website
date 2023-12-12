let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#0BAC00";

document.getElementById("sendModelSettings").addEventListener("click", function() {
    const form = document.querySelector('form');

    // Переменные для режима работы и выбранной модели
    const mode = form['mode'].value;
    const model = form['model'].value; // Теперь выбираем модель, которая действительно есть в форме

    // Переменные для дополнительных настроек, предполагаем что они есть в форме
    const numTokens = form['num_tokens'] ? form['num_tokens'].value : undefined;
    const temperature = form['temperature'] ? form['temperature'].value : undefined;
    const prompt = form['prompt'] ? form['prompt'].value : undefined;

    // Переменные для TTS
    const tts = form['tts'] ? form['tts'].value : undefined;
    const tts_voice = form['tts_voice'] ? form['tts_voice'].value : undefined;

    const messageObj = {
        'Mode': mode,
        'Model': model,
        'Tokens': numTokens,
        'Temperature': temperature,
        'Prompt': prompt,
        'TTS': tts,
        'TTS Voice': tts_voice
    };

    // Отфильтруем неопределенные значения
    const messageObjFiltered = Object.fromEntries(Object.entries(messageObj).filter(([_, v]) => v != null));

    const message = JSON.stringify(messageObjFiltered);

    tg.sendData(message);
    tg.MainButton.setText("Настройки сохранены!");
    tg.MainButton.show();
});

// Возможно, у тебя
