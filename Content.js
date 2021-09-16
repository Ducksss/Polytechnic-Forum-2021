let willSmithImages = [
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/1/200/300",
]

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * willSmithImages.length);
    imgs[i].src = willSmithImages[randomImg];
}

const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = "Pedro is Awesome";
}

// const details = document.getElementsByClassName("attM6y");
// for (let i = 0; i < details.length; i++) {
//     var div = document.createElement("div");
//     div.innerHTML = 'Name: ' + 'Chai' + ' ' + 'Pin Zheng';
//     details[i].innerHTML("CHAI PIN ZHENG IS SO COOL!!!");
// }