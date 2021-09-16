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

// const imgs = document.getElementsByTagName("img");
// for (let i = 0; i < imgs.length; i++) {
//     const randomImg = Math.floor(Math.random() * willSmithImages.length);
//     imgs[i].src = willSmithImages[randomImg];
// }

// const headers = document.getElementsByTagName("h1");
// for (let i = 0; i < headers.length; i++) {
//     headers[i].innerText = "Pedro is Awesome";
// }

const details = document.getElementsByClassName("_1rcM18");
var newNode = document.createElement('div');
newNode.innerHTML = `
                    <div class="attM6y" style="
                        background: background: rgba(249,145,146,0.3);
                        border: 1px solid var(--petalc);
                        color:var(--petalc);
                        background: #CBF0C1;
                        padding:1rem;
                        font:0.9rem sans-serif;
                        width:100%;
                        margin-bottom: 1rem;">
                        "Hershey's Cookies n Creme Candy bar" consumes roughly 6.2 litres of water to manufacture... it is more sustainable
                        and better! Keep it up!
                    </div>
                    `;

details[0].prepend(newNode);