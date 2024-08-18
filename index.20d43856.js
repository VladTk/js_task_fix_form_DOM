document.querySelectorAll("input").forEach(function(e){var t=e.getAttribute("name").replace(/([a-z])([A-Z])/g,"$1 $2"),r=e.getAttribute("id"),a=document.createElement("label");a.classList.add("field-label"),a.setAttribute("for",r),a.innerText=t,e.setAttribute("placeholder",t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()),e.parentElement.append(a)});
//# sourceMappingURL=index.20d43856.js.map
