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

addStatisticsItem("Spider-Man<br>Harry Houdini", winner.less, "King Arthur<br>Sun Wukong");

addStatisticsItem("Medusa<br>The Genie", winner.more, "Robin Hood<br>Sherlock Holmes");

addStatisticsItem("Doctor Strange<br>Harry Houdini", winner.less, "Raptors<br>Nikola Tesla");

addStatisticsItem("Golden Bat<br>Yennenga", winner.more, "Black Panther<br>Winter Soldier");

addStatisticsItem("She-Hulk<br>Achilles", winner.less, "Doctor Strange<br>Bigfoot");