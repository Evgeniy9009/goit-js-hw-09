!function(){var t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),e=document.querySelector("body"),n=null;function l(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),console.log("dfgdg")}t.addEventListener("click",(function(){n=setInterval(l,1e3),t.setAttribute("disabled",!0),console.log(n)})),console.log(n),o.addEventListener("click",(function(){t.removeAttribute("disabled"),clearInterval(n),console.log("stop"),console.log(n)}))}();
//# sourceMappingURL=01-color-switcher.6133310c.js.map
