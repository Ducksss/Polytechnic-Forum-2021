// let willSmithImages = [
//     "https://picsum.photos/id/1/200/300",
//     "https://picsum.photos/id/1/200/300",
//     "https://picsum.photos/id/1/200/300",
//     "https://picsum.photos/id/1/200/300",
//     "https://picsum.photos/id/1/200/300",
//     "https://picsum.photos/id/1/200/300",
//     "https://picsum.photos/id/1/200/300",
//     "https://picsum.photos/id/1/200/300",
// ]

// simple tester
// var seeIfCodeIsWorking = (function () {
//     const imgs = document.getElementsByTagName("img");
//     for (let i = 0; i < imgs.length; i++) {
//         const randomImg = Math.floor(Math.random() * willSmithImages.length);
//         imgs[i].src = willSmithImages[randomImg];
//     }

//     const headers = document.getElementsByTagName("h1");
//     for (let i = 0; i < headers.length; i++) {
//         headers[i].innerText = "Pedro is Awesome";
//     }
// })()

// Function to get tweet content
// var getTweet = (function () {
//     return function (el) {
//         // Get the tweet wrapper from this element
//         var wrap = el.querySelectorAll('article div[data-testid="tweet"]')[0];

//         // Only proceed if query success, otherwise return empty string
//         if (wrap) {
//             var inWrap = wrap.children[1].children[1];
//             if (inWrap) {
//                 return inWrap.querySelectorAll('div[id^="id"]')[0].innerText;
//             } else return "";
//         } else return "";
//     }
// })();

let [initialised1, initialised2] = [false, false]

const selectDOM = function () {
    return new Promise((resolve, reject) => {
        try {
            resolve(document.getElementsByClassName("_1rcM18"))
        } catch (e) {
            reject(e)
        }
    });
}

const addPositiveReinforcement = function () {
    return new Promise(async (resolve, reject) => {
        try {
            // let details = await selectDOM().catch((error) => { console.log(error) })
            let details = document.getElementsByClassName("_1rcM18");

            var newNode = document.createElement('div');
            newNode.innerHTML = `
                            <!-- POSITIVE -->
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
                                and better! Keep it up! In fact, the water consumed to produce fell by 19.3%!
                            </div>
                        `;

            details[0].prepend(newNode);

            initialised1 = true;
            resolve("Success")
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

const addNegativeReinforcement = function () {
    return new Promise(async (resolve, reject) => {
        try {
            var details = await selectDOM().catch((error) => { console.log(error) })
            details = document.getElementsByClassName("_1rcM18");

            var newNode = document.createElement('div');
            newNode.innerHTML = `
                                <div class="attM6y" style="
                                    background: background: rgba(249,145,146,0.3);
                                    border: 1px solid var(--petalc);
                                    color:var(--petalc);
                                    background: #FCDEDE;
                                    padding:1rem;
                                    font:0.9rem sans-serif;
                                    width:100%;
                                    margin-bottom: 1rem;
                                    /* padding-bottom: 1.7rem; */
                                    ">
                                    "Kinder Bueno Chocolate" consumes roughly 12.4 litres of water to manufacture... it is quite water intensive!
                                    Moreover, the manifacturing on "Kinder Bueno Chocolate" has risen by 19.4% since 2012.
                                </div>
                            `;
            details[0].prepend(newNode);

            initialised2 = true;
            resolve("Success")
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

document.addEventListener('readystatechange', async event => {
    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
        alert("hi 1");
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        await brain();
    }
});

const brain = async function () {
    try {
        const details = await selectDOM().catch((e) => { console.log(e) });

        if ((!details) && initialised2 && initialised2) {
            setTimeout(() => brain, 2000);
        } else {
            await addNegativeReinforcement()
                .then(message => {
                    console.log(message)
                })
                .catch(error => {
                    setTimeout(() => brain, 1000);
                })
        }
    } catch (e) {
        console.log(e)
    }
}

setInterval(() => brain, 1000);