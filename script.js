function adjustContainerPadding() {
    const navbar = document.getElementById("navbar");
    const container = document.getElementById("container");

    container.style.paddingTop = navbar.offsetHeight + "px";
}

adjustContainerPadding();

window.addEventListener("resize", adjustContainerPadding);

// add pad links
for (let entry of document.getElementsByClassName("entry")) {
    const code = entry.querySelector(".code").innerHTML;
    
    // add pad link
    let bytes = [].slice.call(new TextEncoder().encode(code));
    bytes = bytes.map(byte => String.fromCodePoint(byte)).join("");

    const td = document.createElement("td");
    const link = document.createElement("a");
    link.innerHTML = "Pad";
    link.setAttribute("href", "https://uiua.org/pad?src=" + btoa(bytes).replace(/\+/g, "-").replace(/\//g, "_"));
    td.appendChild(link);
    entry.appendChild(td);

    // TODO: syntax highlight
}

const searchBar = document.getElementById("search-bar");

for (const entry of document.getElementsByClassName("entry"))
    entry.className = "invisible";

function search() {
    const input = searchBar.value;
    
    document.querySelectorAll(".entry").forEach(e => e.remove());

    const table = document.querySelector("tbody");
    for (const entry of [...table.children].reverse()) {
        if (entry.querySelector(".name").innerHTML.toLowerCase().includes(input.toLowerCase())) {
            const copy = entry.cloneNode(true);
            copy.className = "entry";
            const name = copy.querySelector(".name");
            name.innerHTML = name.innerHTML.replace(new RegExp(input, "gi"), "<mark>$&</mark>");
            table.insertAdjacentElement("afterbegin", copy);
        }
    }
}
search();
searchBar.addEventListener("input", search);

document.addEventListener("keydown", event => {
    if (event.key === "/")
        searchBar.focus();
});