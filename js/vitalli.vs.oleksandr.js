import { winner } from "./modules/winner.js";
import { addHeadItem } from "./modules/add_head_item.js";
import { addStatisticsItem } from "./modules/add_statistics_item.js";
import { addTotalItem } from "./modules/add_total_item.js";

addHeadItem("Vitalii", winner.swords, "Oleksandr L");

addTotalItem(2, winner.swords, 2);

addStatisticsItem("Spider-Man", winner.less, "Luke Cage");

addStatisticsItem("Beowulf", winner.more, "Little Red");

addStatisticsItem("Black Widow", winner.less, "Black Panther");

addStatisticsItem("Spider-Man", winner.more, "Winter Soldier");