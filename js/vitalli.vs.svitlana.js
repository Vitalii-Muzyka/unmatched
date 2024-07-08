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

addStatisticsItem("Robetr Muldoon", winner.less, "Raptors");

addStatisticsItem("Golden Bat", winner.less, "Nikola Tesla");

addStatisticsItem("Annie Christmas", winner.less, "Dr. Jill Trent");

addStatisticsItem("Raptors", winner.more, "T. Rex");

addStatisticsItem("Dr. Ellie Sattler", winner.less, "Raptors");

addStatisticsItem("The Genie", winner.less, "Annie Christmas");

addStatisticsItem("Spider-Man", winner.less, "She-Hulk");

addStatisticsItem("Dr. Jill Trent", winner.less, "Golden Bat");

addStatisticsItem("Beowulf", winner.more, "Bullseye");

addStatisticsItem("Nikola Tesla", winner.more, "Annie Christmas");

addStatisticsItem("Little Red", winner.less, "Yennenga");

addStatisticsItem("Bigfoot", winner.more, "The Genie");

addStatisticsItem("Spider-Man", winner.less, "Luke Cage");

addStatisticsItem("Achilles", winner.less, "Sherlock Holmes");

addStatisticsItem("Doctor Strange", winner.less, "Sherlock Holmes");

addStatisticsItem("Black Widow", winner.less, "Black Panther");

addStatisticsItem("Black Panther", winner.less, "Winter Soldier");

addStatisticsItem("Winter Soldier", winner.more, "Black Widow");

addStatisticsItem("Golden Bat", winner.more, "Harry Houdini");

addStatisticsItem("Sun Wukong", winner.less, "Sherlock Holmes");

addStatisticsItem("Elektra", winner.more, "Luke Cage");