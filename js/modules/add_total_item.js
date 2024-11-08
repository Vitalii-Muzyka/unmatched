function addTotalItem(points1, winner, points2) {
    function win(number) {
        if (number === 1) {
            return "win";
        } 
        return "wins"; 
    }

    const win1 = win(points1);
    const win2 = win(points2);

    let winnerText1 = "";
    let winnerText2 = "";

    if (points1 > points2) {
        winnerText1 = `class="winner-text"`;
    } else if (points1 < points2) {
        winnerText2 = `class="winner-text"`;
    }

    const item = `
        <div class="player__name">
            <p ${winnerText1}>${points1} ${win1}</p>
        </div>
        ${winner}
        <div class="player__name">
            <p ${winnerText2}>${points2} ${win2}</p>
        </div>`;

    const items = document.querySelector(".item-total");
    items.insertAdjacentHTML('beforeend', item);
}

export { addTotalItem };