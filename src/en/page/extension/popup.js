
document.addEventListener("DOMContentLoaded", e => {
  const btn = document.querySelector("#edit-head")

  btn.addEventListener("click", e => {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "showAlert"})
    })
  })
})
