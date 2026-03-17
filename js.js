function upDate(previewPic) {
    console.log("Mouse over triggered");

    // Проверяем данные картинки
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    // Меняем текст
    document.getElementById("image").innerHTML = previewPic.alt;

    // Меняем фон
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Mouse out triggered");

    // Возвращаем текст
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";

    // Убираем фон
    document.getElementById("image").style.backgroundImage = "url('')";
}
