// Author: Chai Pin Zheng, Nicholas, May-Anne, Florance
// Team: SDG6_T13_G37
// Date: 17 / 9 / 2021
// Project Name: Untouched water

let globalBrandName = "";
let globalProductName = "";
let [initialised1, initialised2] = [false, false];

let badCompanies = {
    "hershey": 5.1,
    "KitKat": 3
}

let goodCompanies = {
    "hp": 16.9234,
    "tic tac": 1.1233234,
    "nutella": 3.1212312312,
    "ferrero": 4.1123123123,
    "kinder": 2.93,
    "asus": 0.19,
    "ritter": 2.1123
}

const selectDOM = function () {
    return new Promise((resolve, reject) => {
        try {
            let x = document.getElementsByClassName("_1rcM18")
            resolve(x)
        } catch (e) {
            reject(e)
        }
    });
}

const selectDOM2 = function () {
    return new Promise((resolve, reject) => {
        try {
            let x = document.getElementsByClassName("_3QRNmL")
            resolve(x)
        } catch (e) {
            reject(e)
        }
    });
}

const selectDOM3 = function () {
    return new Promise((resolve, reject) => {
        try {
            let x = document.getElementById("delta987")
            resolve(x)
        } catch (e) {
            reject(e)
        }
    });
}

const addPositiveReinforcement = async function () {
    return new Promise(async (resolve, reject) => {
        try {
            let details = await selectDOM().catch((error) => { console.log(error) })

            if (!details) {
                resolve("failure")
            } else {
                var newNode = document.createElement('div');
                newNode.innerHTML = `
                                    <div class="attM6y" id="delta987"
                                        style="border: 1px solid var(--petalc); color: var(--petalc); background: #CBF0C1; /* padding: 1rem; */ font: 0.9rem sans-serif; width: 100%; margin-bottom: 1rem; padding-left: 1rem; padding-top: 1rem; padding-bottom: 1rem;">
                                        <img src="https://res.cloudinary.com/sp-dit-chai-pin-zheng/image/upload/v1631808781/nr7odyahwxd7qdavcpfh.png"
                                            style="height: 17px; width: 17px;">
                                        Did you know that the manufacturer of "${globalProductName}", "${globalBrandName}" used -${goodCompanies[globalBrandName].toFixed(2)}% less water in its manufacturing plant in 2020 as compared to 2019?
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

const addNegativeReinforcement = async function () {
    return new Promise(async (resolve, reject) => {
        try {
            let details = await selectDOM().catch((error) => { console.log(error) })

            if (!details) {
                resolve("failure")
            } else {
                var newNode = document.createElement('div');
                newNode.innerHTML = `
                                    <div class="attM6y" id="delta987"
                                        style="border: 1px solid var(--petalc); color: var(--petalc); background: #FFDFDF; /* padding: 1rem; */ font: 0.9rem sans-serif; width: 100%; margin-bottom: 1rem; padding-left: 1rem; padding-top: 1rem; padding-bottom: 1rem;">
                                        <img src="https://res.cloudinary.com/sp-dit-chai-pin-zheng/image/upload/v1631808781/nr7odyahwxd7qdavcpfh.png"
                                            style="height: 17px; width: 17px;">
                                        Did you know that the manufacturer of "${globalProductName}", "${globalBrandName}" used -${goodCompanies['HP'].toFixed(2)}% less water in its manufacturing plant in 2020 as compared to 2019?
                                    </div>
                                    `;

                details[0].prepend(newNode);

                initialised2 = true;
                resolve("Success")
            }
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

const loaderChecker = async function () {
    return new Promise(async (resolve, reject) => {
        try {
            let details = await selectDOM3().catch((error) => { console.log(error) })

            console.log("Triggered")

            if (details) {
                resolve("Completed")
            } else {
                brain();
                resolve("failure")
            }
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

const decider = async function () {
    return new Promise(async (resolve, reject) => {
        try {
            let details = await selectDOM2().catch((error) => { console.log(error) })

            if (!details) {
                resolve("failure")
            } else {
                let isGood = false;
                let isBad = false;

                globalProductName = details[3].innerText
                let inputNames = globalProductName.toLowerCase().split(" ")

                for (let item of inputNames) {
                    if (Object.keys(goodCompanies).includes(item)) {
                        globalBrandName = item;
                        isGood = true;
                        break;
                    }

                    if (Object.keys(badCompanies).includes(item)) {
                        globalBrandName = item;
                        isBad = true;
                        break;
                    }
                }
                resolve([isGood, isBad])
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
        setTimeout(brain, 1500);
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        setTimeout(brain, 1500);
    }
});

const brain = async function () {
    try {
        let myTimer;
        await decider()
            .then(async (results) => {
                let [isGood, isBad] = results

                if (isGood) {
                    await addPositiveReinforcement()
                        .then((message) => {
                            console.log(message);
                            loaderChecker();
                        })
                        .catch((error) => { setTimeout(() => brain, 500); })
                }

                if (isBad) {
                    await addNegativeReinforcement()
                        .then((message) => {
                            console.log(message);
                            loaderChecker();
                        })
                        .catch((error) => { setTimeout(() => brain, 500); })
                }
            })
            .catch((error) => { myTimer = setInterval(() => brain, 1000); })
        clearInterval(myTimer)
    } catch (e) {
        console.log(e)
    }
}