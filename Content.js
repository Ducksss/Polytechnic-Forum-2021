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
const addPositiveReinforcement = function () {
    return new Promise((resolve, reject) => {
        try {
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
            initialised1 = true;
            resolve(newNode)
        } catch (error) {
            reject(error)
        }
    })
}

const addNegativeReinforcement = function () {
    const details = document.getElementsByClassName("_1rcM18");
    var newNode = document.createElement('div');
    newNode.innerHTML = `
                    <div class="attM6y" style="
                        background: background: rgba(249,145,146,0.3);;
                        border: 1px solid var(--petalc);
                        color:var(--petalc);
                        background: #FCDEDE;
                        padding:1rem;
                        font:0.9rem sans-serif;
                        width:100%;
                        margin-bottom: 1rem;">
                        A "Kinder Bueno Chocolate" consumes roughly 12.4 litres of water to manufacture... it is very water intensive! Perhaps,
                        you could try a different chocolate instead
                    </div>
                    `;

    initialised1 = false;
    details[0].prepend(newNode);
}

const brain = (async function () {
    const details = document.getElementsByClassName("_1rcM18");

    if (!details) {
        setInterval(() => {
            brain()
        }, 1000);
    } else {
        var newNode = document.createElement('div');
        newNode = await addPositiveReinforcement().catch(error => { console.log(error) })
        details[0].prepend(newNode);
    }
})()

// getWrapper = function () { return document.querySelectorAll('div[aria-label^="Timeline:"] > div')[0]; };

// waitFor(getWrapper, 1000, wrapper => wrapper !== undefined,
//     function (wrapper) {
//         console.log("everything loaded.")
//         // First pass
//         var tweets = wrapper.children;
//         runScript(tweets);
//         loadCss()
//         // Observe for changes of wrapper's child nodes
//         scanDiv(wrapper, function (el) {

//             var addedNodes = [], removedNodes = [];

//             // Record down added divs
//             el.forEach(record => record.addedNodes.length & addedNodes.push(...record.addedNodes))

//             // Record down deleted divs
//             // el.forEach(record => record.removedNodes.length & removedNodes.push(...record.removedNodes))

//             // Run the script for added nodes
//             runScript(addedNodes);

//             // console.log('Added:', addedNodes, 'Removed:', removedNodes);
//         });
//     });