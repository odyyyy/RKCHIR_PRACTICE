function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    } else {
        return str;
    }
}

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let MAX_LENGHT = 70;
let truncatedText = truncate(longText, MAX_LENGHT);

all_article_desc_text = document.querySelectorAll(".overlay p");

for (let article_desc of all_article_desc_text) {
    let description_text = article_desc.innerHTML;
    
    let truncatedDescription = truncate(description_text, MAX_LENGHT);
    article_desc.innerHTML = truncatedDescription;
}

console.log(all_article_desc_text);
