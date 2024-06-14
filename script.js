document.addEventListener("DOMContentLoaded", function () {
    function adjustContainerPadding() {
        const navbar = document.getElementById("navbar");
        const container = document.getElementById("container");

        container.style.paddingTop = navbar.offsetHeight + "px";
    }

    adjustContainerPadding();

    window.addEventListener("resize", adjustContainerPadding);

    // add pad links
    for (let entry of document.getElementsByClassName("entry")) {
        const code = entry.getElementsByClassName("code")[0].innerHTML;
        let bytes = [].slice.call(new TextEncoder().encode(code));
        bytes = bytes.map(byte => String.fromCodePoint(byte)).join("");

        const td = document.createElement("td");
        const link = document.createElement("a");
        link.innerHTML = "Pad";
        link.setAttribute("href", "https://uiua.org/pad?src=0_12_0-dev_1__" + btoa(bytes));
        td.appendChild(link);
        entry.appendChild(td);
    }
});
