chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^https:\/\/shopee.com/.test(tab.url)) {
        console.log("twitter loading completed.")
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["./foreground-bundle.js"]
        })
            .then(() => {
                console.log("Injected Foreground JS.");
            })
            .catch(err => console.log(err));
    }
});