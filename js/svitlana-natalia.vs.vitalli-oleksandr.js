import { winner } from "./modules/winner.js";
import { addHeadItem } from "./modules/add_head_item.js";
import { addStatisticsItem } from "./modules/add_statistics_item.js";
import { addTotalItem } from "./modules/add_total_item.js";

addHeadItem("Svitlana<br>Natalia", winner.swords, "Vitalii<br>Oleksandr L");

addTotalItem(2, winner.swords, 3);

addStatisticsItem("Spider-Man<br>Harry Houdini", winner.less, "King Arthur<br>Sun Wukong");

addStatisticsItem("Medusa<br>The Genie", winner.more, "Robin Hood<br>Sherlock Holmes");

addStatisticsItem("Doctor Strange<br>Harry Houdini", winner.less, "Raptors<br>Nikola Tesla");

addStatisticsItem("Golden Bat<br>Yennenga", winner.more, "Black Panther<br>Winter Soldier");

addStatisticsItem("She-Hulk<br>Achilles", winner.less, "Doctor Strange<br>Bigfoot");