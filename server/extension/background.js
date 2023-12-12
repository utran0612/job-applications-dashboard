chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "addEntity") {
    const data = request.data;
    console.log(data);

    fetch("http://localhost:5001/api/addItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.action.setBadgeText({
//     text: "OFF",
//   });
// });

// chrome.action.onClicked.addListener(async (tab) => {
//   const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
//   const nextState = prevState === "ON" ? "OFF" : "ON";

//   await chrome.action.setBadgeText({
//     tabId: tab.id,
//     text: nextState,
//   });

//   if (nextState === "ON") {
//   }
// });
