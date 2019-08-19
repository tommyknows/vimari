function getSettings() {
    return {
        'modifier': undefined,
        'excludedUrls': '',

        'hintToggle': 'f',
        'newTabHintToggle': 'F',
        'linkHintCharacters': 'aoeuhtnsdi',
        'detectByCursorStyle': false,

        'scrollUp': 'k',
        'scrollDown': 'j',
        'scrollLeft': 'q',
        'scrollRight': 'x',
        'scrollSize': 50,
        'scrollUpHalfPage': 'u',
        'scrollDownHalfPage': 'd',
        'goToPageTop': 'g g',
        'goToPageBottom': 'shift+g',
        'goToFirstInput': 'g i',

        'goBack': 'shift+j',
        'goForward': 'shift+k',
        'reload': 'r',
        'tabForward': 'shift+x',
        'tabBack': 'shift+q',
        'closeTab': 'h',
        'closeTabReverse': 'shift+h',

        'openTab': 't',
    };
}

window.getSettings = getSettings;
