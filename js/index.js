import { winner } from "./modules/winner.js";

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

addPlayerItem("vitalli.vs.oleksandr.html", "Vitalii", "Oleksandr L");

addPlayerItem("svitlana-natalia.vs.vitalli-oleksandr.html", "Svitlana<br>Natalia", "Vitalii<br>Oleksandr L");

addPlayerItem("vitalli.vs.oleksandr_v.html", "Vitalii", "Oleksandr V");

function addTotalItem(player, number) {
    let win = "";
    if (number === 1) {
        win = "win";
    } else {
        win = "wins"; 
    }
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

addTotalItem("Svitlana", 16);

addTotalItem("Vitalii", 26);

addTotalItem("Oleksandr L", 5);

addTotalItem("Yevhen", 6);

addTotalItem("Natalia", 2);

addTotalItem("Oleksandr V", 14);