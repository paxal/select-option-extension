chrome.contextMenus.create({id: 'filter', title: 'Filter select'});
chrome.contextMenus.create({id: 'copy', title: 'Copy selected value'});
chrome.contextMenus.create({id: 'paste', title: 'Paste selected value'});

const doAction = (action) => {
  chrome.tabs.executeScript(
    {file: 'js/load.js', allFrames: true},
    () => {
      chrome.tabs.executeScript({code: `window.__SOExtension.${action}();`, allFrames: true});
    }
  );
};

chrome.contextMenus.onClicked.addListener((info) => {
  const {menuItemId} = info;
  doAction(menuItemId);
});

chrome.commands.onCommand.addListener((command) => {
  doAction(command);
});
