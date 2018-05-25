// ==UserScript==
// @name         cnbeta
// @namespace    http://tampermonkey.net/
// @version      0.11
// @description  反 cnbate反广告屏蔽
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @author       WangHexie
// @match        https://www.cnbeta.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function(){
        setTimeout(
            function()
            {
                var y = y = $('body div[style="display:block !important;position:fixed;bottom:0;margin-top:10px;width:100%;background:#c44;color:#fff;font-size:15px;z-index:99999"]');
                y.hide();
            }, 1000);
    });
})();
