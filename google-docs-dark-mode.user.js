// ==UserScript==
// @name         Google Docs Dark Mode for Safari
// @namespace    https://github.com/farazzmaldi/Google-Docs-Dark-Mode-Safari
// @version      1.0.0
// @description  Comprehensive dark mode userscript for Google Docs on Safari for macOS.
// @author       Farazzmaldi
// @copyright    2026, Farazzmaldi
// @match        https://docs.google.com/document/*
// @run-at       document-start
// @grant        none
// @license      MIT
// @downloadURL  https://raw.githubusercontent.com/farazzmaldi/Google-Docs-Dark-Mode-Safari/main/google-docs-dark-mode.user.js
// @updateURL    https://raw.githubusercontent.com/farazzmaldi/Google-Docs-Dark-Mode-Safari/main/google-docs-dark-mode.user.js
// ==/UserScript==

(function () {
    'use strict';

    const css = `

    /* =========================================
       GOOGLE DOCS DARK MODE FOR SAFARI
       ========================================= */

    html,
    body,
    #docs-editor,
    #docs-editor-container,
    .docs-editor-container,
    .kix-appview-editor-container {
        background-color: #111111 !important;
        color: #eeeeee !important;
    }


    /* =========================================
       EDITOR / WORKSPACE
       ========================================= */

    .kix-appview-editor {
        background-color: #eeeeee !important;
        filter: invert(1) hue-rotate(180deg) !important;
    }

    .kix-appview-editor-container,
    .kix-appview-editor-background,
    .kix-appview-editor-content,
    .kix-appview-editor-page-container,
    .kix-appview-editor-non-print-layout,
    .kix-zoomdocumentplugin-outer,
    .kix-zoomdocumentplugin-inner {
        background-color: #111111 !important;
    }


    /* =========================================
       DOCUMENT PAGE
       ========================================= */

    .kix-page,
    .kix-page-paginated,
    .kix-page-content-wrapper {
        background-color: #ffffff !important;
    }


    /* =========================================
       HEADER
       ========================================= */

    #docs-chrome,
    #docs-header,
    #docs-titlebar,
    #docs-titlebar-container,
    .docs-titlebar-buttons,
    .docs-title-input-label,
    .docs-title-input {
        background-color: #111111 !important;
        color: #eeeeee !important;
    }


    /* =========================================
       TOOLBAR
       ========================================= */

    #docs-toolbar-wrapper,
    .docs-material #docs-toolbar-wrapper,
    .goog-toolbar {
        background-color: #161616 !important;
        color: #eeeeee !important;
        border-color: #333333 !important;
    }

    #docs-toolbar-wrapper .goog-toolbar-button,
    #docs-toolbar-wrapper .goog-toolbar-menu-button,
    #docs-toolbar-wrapper .goog-toolbar-combo-button,
    #docs-toolbar-wrapper .goog-control,
    #docs-toolbar-wrapper input,
    #docs-toolbar-wrapper select {
        background-color: #242424 !important;
        color: #eeeeee !important;
        border-color: #444444 !important;
    }

    #docs-toolbar-wrapper .goog-toolbar-button:hover,
    #docs-toolbar-wrapper .goog-toolbar-menu-button:hover,
    #docs-toolbar-wrapper .goog-toolbar-combo-button:hover {
        background-color: #383838 !important;
    }


    /* =========================================
       MENU BAR
       ========================================= */

    #docs-menubar,
    #docs-menubar .goog-control {
        background-color: #111111 !important;
        color: #dddddd !important;
    }

    #docs-menubar .goog-control:hover {
        background-color: #2a2a2a !important;
    }


    /* =========================================
       DROPDOWN MENUS
       ========================================= */

    .goog-menu,
    .goog-menuitem,
    .goog-menuheader,
    .docs-material-menu,
    .docs-material-gm-ltr {
        background-color: #1b1b1b !important;
        color: #eeeeee !important;
        border-color: #444444 !important;
    }

    .goog-menuitem-highlight,
    .goog-menuitem:hover {
        background-color: #333333 !important;
        color: #ffffff !important;
    }


    /* =========================================
       RULERS
       ========================================= */

    .docs-ruler,
    .docs-ruler-face,
    .docs-ruler-background,
    .kix-horizontal-ruler,
    .kix-vertical-ruler,
    .kix-horizontal-ruler-content,
    .kix-vertical-ruler-content {
        background-color: #181818 !important;
        color: #bbbbbb !important;
        border-color: #333333 !important;
    }


    /* =========================================
       SIDEBARS
       ========================================= */

    .docs-companion-app-switcher-container,
    .docs-explore-sidebar,
    .docs-sidebar,
    .kix-documentmetricsplugin,
    .kix-outlines-widget {
        background-color: #111111 !important;
        color: #eeeeee !important;
    }


    /* =========================================
       COMMENTS
       ========================================= */

    .docs-comments-sidebar,
    .docs-commentbubble,
    .docs-commentbubble-content,
    .docs-anchored-bubble {
        background-color: #1a1a1a !important;
        color: #eeeeee !important;
        border-color: #444444 !important;
    }


    /* =========================================
       INPUTS
       ========================================= */

    input,
    textarea {
        background-color: #222222 !important;
        color: #eeeeee !important;
        border-color: #444444 !important;
    }


    /* =========================================
       SCROLLBAR
       ========================================= */

    ::-webkit-scrollbar {
        width: 10px !important;
        height: 10px !important;
    }

    ::-webkit-scrollbar-track {
        background-color: #111111 !important;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #484848 !important;
        border-radius: 10px !important;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #666666 !important;
    }


    /* =========================================
       TEXT SELECTION
       ========================================= */

    ::selection {
        background-color: rgba(80, 140, 255, 0.5) !important;
    }

    `;


    function installDarkMode() {
        const oldStyle =
            document.getElementById(
                'farazzmaldi-google-docs-dark'
            );

        if (oldStyle) {
            oldStyle.remove();
        }

        const style =
            document.createElement('style');

        style.id =
            'farazzmaldi-google-docs-dark';

        style.textContent = css;

        (
            document.head ||
            document.documentElement
        ).appendChild(style);
    }


    /* Apply immediately */

    installDarkMode();


    /* Apply after DOM loads */

    document.addEventListener(
        'DOMContentLoaded',
        installDarkMode
    );


    /*
       Google Docs dynamically replaces
       interface elements. Reinstall the
       stylesheet if it disappears.
    */

    const observer =
        new MutationObserver(() => {

            if (
                !document.getElementById(
                    'farazzmaldi-google-docs-dark'
                )
            ) {
                installDarkMode();
            }

        });


    observer.observe(
        document.documentElement,
        {
            childList: true,
            subtree: true
        }
    );

})();    .kix-appview-editor-page-container,
    .kix-appview-editor-non-print-layout,
    .kix-zoomdocumentplugin-outer,
    .kix-zoomdocumentplugin-inner {
        background-color: #111111 !important;
    }

    .kix-page,
    .kix-page-paginated,
    .kix-page-content-wrapper {
        background-color: #ffffff !important;
    }

    #docs-chrome,
    #docs-header,
    #docs-titlebar,
    #docs-titlebar-container,
    .docs-titlebar-buttons,
    .docs-title-input-label,
    .docs-title-input {
        background-color: #111111 !important;
        color: #eeeeee !important;
    }

    #docs-toolbar-wrapper,
    .docs-material #docs-toolbar-wrapper,
    .goog-toolbar {
        background-color: #161616 !important;
        color: #eeeeee !important;
        border-color: #333333 !important;
    }

    #docs-toolbar-wrapper .goog-toolbar-button,
    #docs-toolbar-wrapper .goog-toolbar-menu-button,
    #docs-toolbar-wrapper .goog-toolbar-combo-button,
    #docs-toolbar-wrapper .goog-control,
    #docs-toolbar-wrapper input,
    #docs-toolbar-wrapper select {
        background-color: #242424 !important;
        color: #eeeeee !important;
        border-color: #444444 !important;
    }

    #docs-toolbar-wrapper .goog-toolbar-button:hover,
    #docs-toolbar-wrapper .goog-toolbar-menu-button:hover,
    #docs-toolbar-wrapper .goog-toolbar-combo-button:hover {
        background-color: #383838 !important;
    }

    #docs-menubar,
    #docs-menubar .goog-control {
        background-color: #111111 !important;
        color: #dddddd !important;
    }

    #docs-menubar .goog-control:hover {
        background-color: #2a2a2a !important;
    }

    .goog-menu,
    .goog-menuitem,
    .goog-menuheader,
    .docs-material-menu,
    .docs-material-gm-ltr {
        background-color: #1b1b1b !important;
        color: #eeeeee !important;
        border-color: #444444 !important;
    }

    .goog-menuitem-highlight,
    .goog-menuitem:hover {
        background-color: #333333 !important;
        color: #ffffff !important;
    }

    .docs-ruler,
    .docs-ruler-face,
    .docs-ruler-background,
    .kix-horizontal-ruler,
    .kix-vertical-ruler,
    .kix-horizontal-ruler-content,
    .kix-vertical-ruler-content {
        background-color: #181818 !important;
        color: #bbbbbb !important;
        border-color: #333333 !important;
    }

    .docs-companion-app-switcher-container,
    .docs-explore-sidebar,
    .docs-sidebar,
    .kix-documentmetricsplugin,
    .kix-outlines-widget {
        background-color: #111111 !important;
        color: #eeeeee !important;
    }

    .docs-comments-sidebar,
    .docs-commentbubble,
    .docs-commentbubble-content,
    .docs-anchored-bubble {
        background-color: #1a1a1a !important;
        color: #eeeeee !important;
        border-color: #444444 !important;
    }

    input,
    textarea {
        background-color: #222222 !important;
        color: #eeeeee !important;
        border-color: #444444 !important;
    }

    ::-webkit-scrollbar {
        width: 10px !important;
        height: 10px !important;
    }

    ::-webkit-scrollbar-track {
        background-color: #111111 !important;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #484848 !important;
        border-radius: 10px !important;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #666666 !important;
    }

    ::selection {
        background-color: rgba(80, 140, 255, 0.5) !important;
    }

    `;

    function installDarkMode() {
        const oldStyle =
            document.getElementById('farazzmaldi-google-docs-dark');

        if (oldStyle) {
            oldStyle.remove();
        }

        const style = document.createElement('style');

        style.id = 'farazzmaldi-google-docs-dark';
        style.textContent = css;

        (document.head || document.documentElement)
            .appendChild(style);
    }

    installDarkMode();

    document.addEventListener(
        'DOMContentLoaded',
        installDarkMode
    );

    const observer = new MutationObserver(() => {
        if (
            !document.getElementById(
                'farazzmaldi-google-docs-dark'
            )
        ) {
            installDarkMode();
        }
    });

    observer.observe(
        document.documentElement,
        {
            childList: true,
            subtree: true
        }
    );

})();
