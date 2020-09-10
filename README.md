# Select Option Extension

This is a Chrome plugin that allows you to restrict shown values for a
`<select>` element, and to copy current value and paste it in another
`<select>` element.

## Features

 * **Filtering**: hides/show `<option>` elements given an regular expression;
 * **Copy/Paste**: copy current selected value, and paste it in another 
   `<select>` element will select the option with the same value.

## Installation

Unpack the source somewhere, go to [chrome://extensions/](chrome://extensions/)
and click on *load the unpacked extension*. Select the `src/` folder. 

## How to use it

There are two ways of using the extension:

 * **Context-menu** after right-click on a `<select>` element;
 * **Shortcut** via `Alt+Maj+[FCV]`. Shortcuts are customizable via
   [chrome://extensions/shortcuts](chrome://extensions/shortcuts).

## Known limitations

Does not work well when `<select>` is in a frame.
