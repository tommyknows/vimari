function getSettings() {
    return {
        'modifier': undefined,
        'excludedUrls': '',

        'hintToggle': 'f',
        'newTabHintToggle': 'F',
        'linkHintCharacters': 'asdfjklqwerzxc',
        'detectByCursorStyle': false,

        'scrollUp': 'k',
        'scrollDown': 'j',
        'scrollLeft': 'h',
        'scrollRight': 'l',
        'scrollSize': 50,
        'scrollUpHalfPage': 'u',
        'scrollDownHalfPage': 'd',
        'goToPageTop': 'g g',
        'goToPageBottom': 'shift+g',
        'goToFirstInput': 'g i',

        'goBack': 'shift+h',
        'goForward': 'shift+l',
        'reload': 'r',
        'tabForward': 'w',
        'tabBack': 'q',
        'closeTab': 'x',
        'closeTabReverse': 'shift+x',

        'openTab': 't',
    };
}

window.getSettings = getSettings;
