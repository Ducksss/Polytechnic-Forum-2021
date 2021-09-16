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

// // simple tester
// const imgs = document.getElementsByTagName("img");
// for (let i = 0; i < imgs.length; i++) {
//     const randomImg = Math.floor(Math.random() * willSmithImages.length);
//     imgs[i].src = willSmithImages[randomImg];
// }

// const headers = document.getElementsByTagName("h1");
// for (let i = 0; i < headers.length; i++) {
//     headers[i].innerText = "Pedro is Awesome";
// }

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
            let x = document.getElementsByClassName("_1rcM18")
            console.log(x)
            resolve()
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

            if (!details) {
                brain();
                resolve("failure")
            } else {
                var newNode = document.createElement('div');
                newNode.innerHTML = `
                                    <div class="attM6y"
                                        style="border: 1px solid var(--petalc); color: var(--petalc); background: #CBF0C1; /* padding: 1rem; */ font: 0.9rem sans-serif; width: 100%; margin-bottom: 1rem; padding-left: 1rem; padding-top: 1rem; padding-bottom: 1rem;">
                                        <img src="https://res.cloudinary.com/sp-dit-chai-pin-zheng/image/upload/v1631808781/nr7odyahwxd7qdavcpfh.png"
                                            style="height: 17px; width: 17px;">
                                        Did you know that the manufacturer of "Kinder Bueno Chocolate" used -4.3% less water in its manufacturing plant in 2020 as compared to 2019?
                                    </div>
                                    `;

                details[0].prepend(newNode);

                initialised1 = true;
                resolve("Success")
            }
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

const addNegativeReinforcement = function () {
    return new Promise(async (resolve, reject) => {
        try {
            // let details = await selectDOM().catch((error) => { console.log(error) })
            let details = document.getElementsByClassName("_1rcM18");

            if (!details) {
                brain();
                resolve("failure")
            } else {
                var newNode = document.createElement('div');
                newNode.innerHTML = `
                                    <div class="attM6y"
                                        style="border: 1px solid var(--petalc); color: var(--petalc); background: #FFDFDF; /* padding: 1rem; */ font: 0.9rem sans-serif; width: 100%; margin-bottom: 1rem; padding-left: 1rem; padding-top: 1rem; padding-bottom: 1rem;">
                                        <img src="https://res.cloudinary.com/sp-dit-chai-pin-zheng/image/upload/v1631808781/nr7odyahwxd7qdavcpfh.png"
                                            style="height: 17px; width: 17px;">
                                        Did you know that the manufacturer of "Kinder Bueno Chocolate" used -4.3% less water in its manufacturing plant in 2020 as compared to last year?
                                    </div>
                                    `;

                details[0].prepend(newNode);

                initialised1 = true;
                resolve("Success")
            }
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
        setTimeout(brain, 1500);
    }
});

const brain = async function () {
    try {
        console.log("Pass 1");
        const details = await selectDOM().catch((e) => { console.log(e) });

        if ((!details) && initialised2 && initialised2) {
            console.log("Fail 1");
            setTimeout(() => brain, 2000);
        } else {
            console.log(details)
            console.log("Pass 2");
            await addNegativeReinforcement()
                .then((message) => {
                    console.log(message)
                })
                .catch((error) => {
                    setTimeout(() => brain, 1000);
                })
        }
    } catch (e) {
        console.log(e)
    }
}