// ==UserScript==
// @name        Arras Fix shooting
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description Arras Fix shooting 06/2026
// @author      Vulcain
// @match       https://arras.io/*
// @icon        https://arras.io/favicon/base.svg
// @run-at      document-start
// @grant       none
// ==/UserScript==

WebSocket = class extends WebSocket {
    constructor(...args) {
        args[0] = args[0].replace(
            /&t=\d*/,
            `&t=${Math.floor(Date.now() / 1000)}`
        );
        super(...args);
    }
}
