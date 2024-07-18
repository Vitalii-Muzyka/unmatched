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

addStatisticsItem("Ms. Marvel", winner.less, "Shakespeare");

addStatisticsItem("Oda Nobunaga", winner.more, "Hamlet");

addStatisticsItem("Willow", winner.more, "Angel");

addStatisticsItem("Deadpool", winner.more, "Spike");

addStatisticsItem("Cloak and Dagger", winner.less, "Winter Soldier");

addStatisticsItem("Bruce Lee", winner.less, "Buffy");

addStatisticsItem("The Wayward Sisters", winner.less, "Titania");

addStatisticsItem("Sun Wukong", winner.less, "Nikola Tesla");

addStatisticsItem("Black Panther", winner.more, "Dr. Jill Trent");

addStatisticsItem("Tomoe Gozen", winner.more, "Golden Bat");

addStatisticsItem("Titania", winner.less, "Black Widow");

addStatisticsItem("Spike", winner.less, "Squirrel Girl");

addStatisticsItem("Angel", winner.less, "Cloak and Dagge");

addStatisticsItem("Buffy", winner.less, "Little Red");

addStatisticsItem("Oda Nobunaga", winner.less, "Tomoe Gozen");
