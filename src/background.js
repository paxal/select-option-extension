chrome.contextMenus.create({id: 'filter', title: 'Filter select'});
chrome.contextMenus.create({id: 'copy', title: 'Copy selected value'});
chrome.contextMenus.create({id: 'paste', title: 'Paste selected value'});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.sendMessage(tab.id, {action: info.menuItemId});
});

/**
 * @param {Function} callback
 * @return {Promise<PermissionStatus>}
 */
const getActiveTab = (callback) => chrome.tabs.query(
  {active: true, windowId: chrome.windows.WINDOW_ID_CURRENT},
  (tabs) => {
    const tab = tabs.shift();
    if (tab === null) {
      return;
    }

    callback(tab);
  }
);

chrome.commands.onCommand.addListener((command) => {
  getActiveTab(
    (tab) => chrome.tabs.sendMessage(tab.id, {action: command})
  );
});
