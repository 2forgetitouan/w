// ==UserScript==
// @name        Arras Fix shooting
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description Arras Fix shooting 06/2026
// @author      -
// @match       https://arras.io/*
// @icon        https://arras.io/favicon/base.svg
// @run-at      document-start
// @grant       none
// ==/UserScript==

WebSocket = class extends WebSocket {
  constructor(...args) {
    let time = Math.round(Date.now() / 1000)
    args[0] = args[0].slice(0, args[0].indexOf("/?"))
    args[0] += "/?a=3&b=8f8d16adff17e2b9&t=" + time
    super(...args)
  }
}
