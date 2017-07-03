export default {
  tables: {
    id: {
      type: "bigint",
      maxlength: 50,
      increments: true,
      nullable: false,
      primary: true,
      unique: true
    },
    name: { type: "nvarchar", unique: true, maxlength: 150, nullable: false },
    orderID: { type: "bigint", maxlength: 50, nullable: false, default: 0 }
  },
  orders: {
    id: {
      type: "bigint",
      maxlength: 50,
      increments: true,
      nullable: false,
      primary: true,
      unique: true
    },
    foods: { type: "text", nullable: true },
    total: { type: "text", nullable: true },
    order_date: { type: "date", default: "CURRENT_TIMESTAMP", nullable: false },
    end_date: { type: "date", default: "CURRENT_TIMESTAMP", nullable: false }
  },
  foods: {
    id: {
      type: "bigint",
      maxlength: 50,
      increments: true,
      nullable: false,
      primary: true,
      unique: true
    },
    name: { type: "nvarchar", unique: true, maxlength: 150, nullable: false },
    price: { type: "text", maxlength: 100000, nullable: true }
  },
  settings: {
    id: {
      type: "bigint",
      maxlength: 50,
      increments: true,
      nullable: false,
      primary: true,
      unique: true
    },
    key: { type: "text", maxlength: 100000, nullable: false },
    value: { type: "text", maxlength: 100000, nullable: true }
  }
};
