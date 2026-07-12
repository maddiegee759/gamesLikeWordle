const btn = document.querySelector("input[type=submit]");

const games = [
    { id: "queens", url: "https://queensultimate.com/" },
    { id: "flip", url: "https://flipultimate.com/" },
    { id: "mini-sudoku", url: "https://www.minisudoku.com/" },
    { id: "wordle", url: "https://www.nytimes.com/games/wordle/index.html" },
    { id: "worldle", url: "https://worldle.teuteuf.fr/" },
    { id: "crossherd", url: "https://crossherd.clevergoat.com/" },
    { id: "stacked", url: "https://stacked.clevergoat.com/" },
    { id: "connections", url: "https://www.nytimes.com/games/connections" },
    { id: "sumplete", url: "https://sumplete.com/" },
    { id: "angle", url: "https://angle.wtf/" },
    { id: "flagle", url: "https://flagle-game.com/daily" },
    { id: "strands", url: "https://www.nytimes.com/games/strands" },
    { id: "word-salad", url: "https://wordsalad.online/" },
    { id: "globle", url: "https://globle-game.com/" },
    { id: "statele", url: "https://statele.teuteuf.fr/" },
    { id: "pair-down", url: "https://pairdown.com/" },
    { id: "wordga", url: "https://wordga.com/" },
    { id: "mathler", url: "https://mathler.com/" },
    { id: "quordle", url: "https://www.merriam-webster.com/games/quordle/#/classic" },
    { id: "tradle", url: "https://oec.world/en/games/tradle-game" },
    { id: "word-grid", url: "https://wordgrid.clevergoat.com/" },
    { id: "octordle", url: "https://octordlegame.io/" },
    { id: "travle", url: "https://travle.earth/" },
    { id: "geogrid", url: "https://www.geogridgame.com/" },
    { id: "dont-wordle", url: "https://dontwordle.com/" },
    { id: "flipple", url: "https://flipple.clevergoat.com/" },
    { id: "s-acrostic", url: "https://www.sporcle.com/acrostic/play" },
    { id: "s-europe", url: "https://www.sporcle.com/games/g/europe" },
    { id: "s-africa", url: "https://www.sporcle.com/games/g/africa" },
    { id: "s-asia", url: "https://www.sporcle.com/games/g/asia" },
    { id: "s-south-america", url: "https://www.sporcle.com/games/g/southamerica" },
    { id: "s-north-america", url: "https://www.sporcle.com/games/g/northamerica" },
    { id: "s-oceania", url: "https://www.sporcle.com/games/g/oceania" },
    { id: "s-world", url: "https://www.sporcle.com/games/g/world" },
    { id: "s-us", url: "https://www.sporcle.com/games/g/states" },
    { id: "s-find-us", url: "https://www.sporcle.com/games/Matt/find_the_states" }
];

games.forEach((game) => {
    const checkbox = document.getElementById(game.id);
    if (!checkbox) {
        return;
    }

    const row = checkbox.closest("tr");
    const link = row?.querySelector("a");

    if (link) {
        link.href = game.url;
    }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

    games.forEach((game) => {
        if (document.getElementById(game.id)?.checked) {
            window.open(game.url);
        }
    });
});