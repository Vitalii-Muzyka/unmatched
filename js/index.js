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

function addStatisticsItem(player1, hero1, winner, hero2, player2) {
    const item = `
        <div class="statistics__item">
            <div class="player__name">
                <p>${player1}</p>
            </div>
            <div class="hero__name">
                <p>${hero1}</p>
            </div>
            ${winner}
            <div class="hero__name">
                <p>${hero2}</p>
            </div>
            <div class="player__name">
                <p>${player2}</p>
            </div>
        </div>`;
    const items = document.querySelector(".statistics__items");
    items.insertAdjacentHTML('beforeend', item);
}

addStatisticsItem("Vitalii", "Robetr Muldoon", winner.less, "Raptors", "Svitlana");

addStatisticsItem("Vitalii", "Golden Bat", winner.less, "Nikola Tesla", "Svitlana");

addStatisticsItem("Vitalii", "Annie Christmas", winner.less, "Dr. Jill Trent", "Svitlana");

addStatisticsItem("Vitalii", "Raptors", winner.more, "T. Rex", "Svitlana");

