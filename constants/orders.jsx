export const orders = [
  {
    id: "1",
    products: [
      {
        id: 1,
        name: "Refrigerator",
        quantity: 2,
        price: 29.99,
        image: "/fridge.jpeg",
      },
      {
        id: 2,
        name: "Grill Set",
        quantity: 1,
        price: 49.99,
        image: "/grill.jpeg",
      },
    ],
    totalAmount: 109.97,
    status: "Pending",
  },
  {
    id: "2",
    products: [
      {
        id: 3,
        name: "Cheese Grater",
        quantity: 3,
        price: 19.99,
        image: "/grater.jpeg",
      },
      {
        id: 4,
        name: "Chef's Knife",
        quantity: 1,
        price: 39.99,
        image: "/knife.jpeg",
      },
    ],
    totalAmount: 99.95,
    status: "Approved",
  },
  {
    id: "3",
    products: [
      {
        id: 5,
        name: "Coffee Machine",
        quantity: 1,
        price: 99.99,
        image: "/machine.jpeg",
      },
    ],
    totalAmount: 99.99,
    status: "Shipped",
  },
  {
    id: "4",
    products: [
      {
        id: 6,
        name: "Office Chair",
        quantity: 2,
        price: 14.99,
        image: "/chair.jpeg",
      },
    ],
    totalAmount: 29.98,
    status: "Unrated",
  },
];
