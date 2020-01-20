// ==UserScript==
// @name         tt-torrent_Disable_Alert_Popup
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.tt-torrent.com/*
// @grant        none
// ==/UserScript==

window.alert = function(){}
