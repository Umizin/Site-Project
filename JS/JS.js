const containerDeLinks = document.getElementById("containerDeLinks")

const urls = [
    "https://www.xvideos.com/",
    "https://discord.gg/SmzHxAdj",
    "https://www.google.com/intl/pt-BR/gmail/about/"

];

for (var i = 0; i < urls.length; i++) {
    const botoesDosLinks = document.createElement("botoesDosLinks");
    botoesDosLinks.className = "botoesDosLinks";
    botoesDosLinks.textContent = 'botoesDosLinks ${i + 1}';

    botoesDosLinks.addEventListener("click", function() {
        window.location.href = urls[i];

    });

    gridContainer.appendChild(botoesDosLinks)
}
