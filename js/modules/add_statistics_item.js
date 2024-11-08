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

export { addStatisticsItem };