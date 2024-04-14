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

function addPlayerItem(page, player1, player2) {
    const item = `
        <a href="${page}">
            <div class="statistics__item">
                <div class="player__name">
                    <p>${player1}</p>
                </div>
                ${winner.swords}
                <div class="player__name">
                    <p>${player2}</p>
                </div>
            </div>
        </a>`;
    const items = document.querySelector(".statistics__items");
    items.insertAdjacentHTML('beforeend', item);
}

addPlayerItem("vitalli.vs.svitlana.html", "Vitalii", "Svitlana");

addPlayerItem("vitalli.vs.yevhen.html", "Vitalii", "Yevhen");

addPlayerItem("vitalli.vs.oleksandr.html", "Vitalii", "Oleksandr");

// addPlayerItem("vitalli-yevhen.vs.svitlana-oleksandr.html", "Vitalii<br>Yevhen", "Oleksandr<br>Svitlana");

function addTotalItem(player, number) {
    let win = "";
    function wins(number) {
        if (number === 1) {
            win = "win";
        } else {
            win = "wins"; 
        }
    }
    wins(number);
    const item = `
        <div class="item-total">
            <div class="player__name">
                <p>${player}:</p>
            </div>
            <div class="winner">
            </div>
            <div class="player__name">
                <p>${number} ${win}</p>
            </div>
        </div>`;
    const items = document.querySelector(".statistics__items-total");
    items.insertAdjacentHTML('beforeend', item);
}

addTotalItem("Svitlana", 6);

addTotalItem("Vitalii", 3);

addTotalItem("Yevhen", 2);

addTotalItem("Oleksandr", 0);