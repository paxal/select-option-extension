(() => {
  const holder = {context: null, clipboard: null};

  const isSelect = (select) => select instanceof HTMLElement && select.tagName.toLowerCase() === 'select';
  const getSelect = () => isSelect(holder.context) ? holder.context : (isSelect(document.activeElement) ? document.activeElement : null);

  document.addEventListener('contextmenu', (e) => {
    holder.context = e.target;
    chrome.runtime.sendMessage({'isSelect': getSelect() !== null});
  });

  /**
   * @param {HTMLSelectElement} e
   * @param {boolean} visible
   */
  const show = (e, visible) => {
    if (visible && e.style.display === 'none') {
      e.style.display = '';
    }
    if (!visible && e.style.display !== 'none') {
      e.style.display = 'none';
    }
    if (visible && e.hasAttribute('disabled')) {
      e.removeAttribute('disabled');
    }
    if (!visible && !e.hasAttribute('disabled')) {
      e.setAttribute('disabled', 'disabled');
    }
  };

  const doPrompt = () => {
    const select = getSelect();
    if (!isSelect(select)) {
      return;
    }

    // eslint-disable-next-line no-alert
    let text = prompt('Filter values (re) :');
    if (text === null) {
      text = '';
    }

    // No set if selected OK
    const re = new RegExp(text, 'i');
    let selected = null;
    for (const option of select.options) {
      const matches = re.test(option.label);
      if (matches) {
        show(option, true);
        if (null === selected && text !== '') {
          selected = option;
        }
      } else {
        show(option, false);
      }
    }

    if (null !== selected) {
      select.value = selected.value;
    }
  };

  chrome.runtime.onMessage.addListener((payload) => {
    const select = getSelect();
    if (select === null) {
      return;
    }
    switch (payload.action) {
    case 'filter':
      doPrompt();
      break;

    case 'copy':
      holder.clipboard = select.value;
      break;

    case 'paste':
      select.value = holder.clipboard;
      break;
    }
  });
})();
