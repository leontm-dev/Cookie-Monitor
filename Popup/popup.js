chrome.cookies.getAll({}, ((cookies) => {
    // let text ='Number of cookies=' + cookies.length + '\n';
    // console.log(text);
    for (let i = 0; i < cookies.length; i++) {
        console.log(cookies[i])
        let tr = document.createElement("tr");
        let index = document.createElement("th");
        index.classList.add("table-header");
        index.classList.add("table-header");
        index.innerHTML = `<span class='table-text'>${i}</span>`;
        let name = document.createElement("th");
        name.classList.add("table-header");
        name.classList.add("table-header");
        name.innerHTML = `<span class='table-text'>${cookies[i].name}</span>`;
        let value = document.createElement("th");
        value.classList.add("table-header");
        value.classList.add("table-header");
        value.innerHTML = `<span class='table-text'>${cookies[i].value}</span>`
        let domain = document.createElement("th");
        domain.classList.add("table-header");
        domain.classList.add("table-header");
        domain.innerHTML = `<span class='table-text'>${cookies[i].domain}</span>`;
        let expires = document.createElement("th");
        expires.classList.add("table-header");
        expires.classList.add("table-header");
        expires.innerHTML = `<span class='table-text'>${new Date(cookies[i].expirationDate*1000).toLocaleDateString("de-de")}</span>`;
        tr.appendChild(index);
        tr.appendChild(domain);
        tr.appendChild(name);
        tr.appendChild(value);
        tr.appendChild(expires);
        document.getElementById("cookie-table").appendChild(tr);
    };
    document.getElementsByClassName("table-container")[0].scrollTo(0, 200000000000)
}));

document.getElementById("reload").addEventListener("click", (ev) => {
    window.location.reload();
});
document.getElementById("delete-all").addEventListener("click", (ev) => {
    chrome.cookies.getAll({}, ((cookies) => {
        for (let i = 0; i < cookies.length; i++) {
            chrome.cookies.remove({ "name": cookies[i].name, "url": `https://${cookies[i].domain}${cookies[i].path}` }, (details) => {
                if (details == null) {
                    console.log(`Fehler beim Löschen von Cookie ${i}`);
                };
            })
        }
    }));
    window.location.reload();
});