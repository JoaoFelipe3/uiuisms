document.addEventListener("DOMContentLoaded", function () {
  // add pad links
  for (let entry of document.getElementsByClassName("entry")) {
    const code = entry.querySelector(".code").innerHTML;
    let bytes = [].slice.call(new TextEncoder().encode(code));
    bytes = bytes.map((byte) => String.fromCodePoint(byte)).join("");

    const td = document.createElement("td");
    const link = document.createElement("a");
    link.innerHTML = "Pad";
    link.setAttribute(
      "href",
      "https://uiua.org/pad?src=" +
        btoa(bytes).replace(/\+/g, "-").replace(/\//g, "_")
    );
    link.className = "underline text-teal-800 dark:text-teal-100";
    td.appendChild(link);
    entry.appendChild(td);
  }

  const searchBar = document.getElementById("search-bar");
  searchBar.addEventListener("input", function () {
    const input = searchBar.value;
    console.log(input);
    for (let entry of document.getElementsByClassName("entry")) {
      const name = entry.querySelector(".name").innerHTML;
      entry.className =
        "entry" +
        (name.toLowerCase().includes(input.toLowerCase()) ? "" : " hidden");
    }
  });
});
