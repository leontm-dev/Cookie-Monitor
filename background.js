chrome.cookies.getAll({}, ((cookies) => {
    let text ='Number of cookies=' + cookies.length + '\n';
    console.log(text);
}));