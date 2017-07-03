import { SQLite } from "expo";

export default SQLite.openDatabase({ name: "app_food_order.db" });
