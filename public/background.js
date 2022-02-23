chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "NEW_CHART_REQUEST" && !!request.data) {
    chrome.tabs.create(
      {
        url: "index.html",
        active: false,
      },
      (tab) => {
        chrome.windows.create(
          {
            tabId: tab.id,
            type: "popup",
            focused: true,
            height: 775,
            width: 750,
          },
          () => {
            const dataListener = (message, sender, sendResponse) => {
              console.log("background message ", message, sender);
              if (sender.tab.id === tab.id) {
                sendResponse({ data: request.data });
                chrome.runtime.onMessage.removeListener(dataListener);
              }
            };
            chrome.runtime.onMessage.addListener(dataListener);
          }
        );
      }
    );
  }
});
