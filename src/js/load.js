(() => {
  const SOExtension = {
    /** @type {String|null} */
    clipboard: null,

    /**
     * @param {HTMLElement|null} el
     * @return {null|HTMLSelectElement}
     */
    getSelect(el) {
      const activeElement = el || document.activeElement;
      if (activeElement instanceof HTMLSelectElement) {
        return activeElement;
      }
      if (activeElement === null) {
        return null;
      }
      const htmlSelectElement = activeElement.closest('select');
      if (htmlSelectElement !== null) {
        return htmlSelectElement;
      }

      if (activeElement.shadowRoot !== null) {
        return this.getSelect(activeElement.shadowRoot.activeElement);
      }

      return null;
    },

    /**
     * @param {HTMLSelectElement} e
     * @param {boolean} visible
     */
    show(e, visible) {
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
    },

    doPrompt() {
      const select = this.getSelect();
      if (select === null) {
        return;
      }

      // eslint-disable-next-line no-alert
      let text = prompt('Filter values (re) :');
      if (text === null) {
        text = '';
      }

      // No set if selected OK
      const re = new RegExp(text, 'iu');
      /** @type {HTMLOptionElement|null} */
      let selected = null;
      for (const option of select.options) {
        const matches = re.test(option.label);
        if (matches) {
          this.show(option, true);
          if (null === selected && text !== '') {
            selected = option;
          }
        } else {
          this.show(option, false);
        }
      }

      if (null !== selected) {
        select.value = selected.value;
      }
    },

    copy() {
      const select = this.getSelect();
      if (select === null) {
        return;
      }

      this.clipboard = select.value;
    },

    paste() {
      const select = this.getSelect();
      if (select === null) {
        return;
      }

      select.value = this.clipboard;
    },

    filter() {
      this.doPrompt();
    },
  };

  window.__SOExtension = window.__SOExtension || {
    filter: () => SOExtension.filter(),
    copy: () => SOExtension.copy(),
    paste: () => SOExtension.paste(),
  };
})();
