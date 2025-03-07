window.browser = window.msBrowser || window.browser || window.chrome

browser.tabs.query({active: true, currentWindow: true}, function (tabs) {
  browser.scripting.executeScript({
    target: {tabId: tabs[0].id},
    files: ["polyfill-ce.js", "web-creator.js"],
  })
})

document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: function get_window_ids () {
        let head_id = document.head.id;
  
        if (!head_id) {
          head_id = "wc-head";
          document.head.id = head_id;
        }
        
        const ids = [
          {
            "id": head_id,
            "title": "Head"
          }
        ];

        return ids;
      },
    }, function add_window_launchers ([{result}]) {

      document.body.insertAdjacentHTML("afterbegin", `
        <p class="title">Choose window to edit:</p>
        <p>
          <button class="window-btn" value="${result[0].id}">${result[0].title}</button>
          <button class="window-btn" disabled>Edit Body <small>coming soon</small></button>
        </p>
      `);
    });
  });
});


document.addEventListener("click", e => {
  if (e.target.classList.contains("window-btn")) {
    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {action: "showCreator", data: {window_id: e.target.value}})
    })
  }  
})