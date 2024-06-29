const winner = {
    swords: `
        <div class="winner">
            <img class="img-swords" src="images/swords.png" alt="swords">
        </div>`,
    more: `
        <div class="winner">
            <img class="img-more" src="images/more.png" alt="more">
        </div>`,
    less: `
        <div class="winner">
            <img class="img-less" src="images/less.png" alt="less">
        </div>`
};

function addStatisticsItem(hero1, winner, hero2) {
    const item = `
        <div class="statistics__item">
            <div class="hero__name">
                <p>${hero1}</p>
            </div>
            ${winner}
            <div class="hero__name">
                <p>${hero2}</p>
            </div>
        </div>`;
    const items = document.querySelector(".statistics__items");
    items.insertAdjacentHTML('beforeend', item);
}

addStatisticsItem("Spider-Man", winner.less, "Raptors");

addStatisticsItem("Doctor Strange", winner.more, "Harry Houdini");

addStatisticsItem("Spider-Man", winner.less, "The Genie");

addStatisticsItem("Achilles", winner.more, "Sun Wukong");

addStatisticsItem("Bloody Mary", winner.more, "Yennenga");

addStatisticsItem("She-Hulk", winner.more, "Little Red");

addStatisticsItem("Sherlock Holmes", winner.more, "Annie Christmas");

addStatisticsItem("King Arthur", winner.less, "Bigfoot");

addStatisticsItem("Squirrel Girl", winner.less, "Bruce Lee");

addStatisticsItem("Moon Knight", winner.more, "Nikola Tesla");

addStatisticsItem("Winter Soldier", winner.less, "Medusa");

addStatisticsItem("Hamlet", winner.more, "Titania");
