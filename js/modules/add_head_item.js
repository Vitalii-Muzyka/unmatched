function addHeadItem(player1, winner, player2) {
    const item = `
        <div class="player__name larger-text">
            <p>${player1}</p>
        </div>
        ${winner}
        <div class="player__name larger-text">
            <p>${player2}</p>
        </div>`;
        
    const items = document.querySelector(".item-head");
    items.insertAdjacentHTML('beforeend', item);
}

export { addHeadItem };