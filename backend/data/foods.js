const foods = [
  // Biryani
  {
    name: "Chicken Biryani",
    category: "Biryani",
    price: 249,
    description: "Delicious chicken biryani",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtWQFgd3t1sPPSxlnk-0TT5KOM6GnliFxVKqudAMSTA&s=10"
  },
  {
    name: "Veg Biryani",
    category: "Biryani",
    price: 199,
    description: "Flavorful vegetable biryani",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1UZend_RjmAq8vdo_pknn7t0U-O_LX2kAWqUepeoeQ&s=10"
  },
  {
    name: "Mutton Biryani",
    category: "Biryani",
    price: 329,
    description: "Rich and flavorful mutton biryani",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUh09htZdZvo9DRD4yrdwZt6HdpQQE0e_d9jWN0unfOw&s=10"
  },
  {
    name: "Egg Biryani",
    category: "Biryani",
    price: 179,
    description: "Aromatic biryani served with boiled eggs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX12jGPsA1EEB159VzULX_ba33sgaZhtaUHbUtIyu5vg&s=10"
  },

  // Pizza
  {
    name: "Margherita Pizza",
    category: "Pizza",
    price: 199,
    description: "Classic pizza with tomato and mozzarella",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hwBL3hHMAJ92W7prLP3ErnTjQxgUvFoxBAC1VwOtyQ&s=10"
  },
  {
    name: "Chicken Pizza",
    category: "Pizza",
    price: 299,
    description: "Chicken loaded pizza with cheese",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3PXOm0OX0YxYgKO20BJ5M1o_4c106iSGgOt2L6Bdjw&s=10"
  },
  {
    name: "Farmhouse Pizza",
    category: "Pizza",
    price: 249,
    description: "Loaded with fresh vegetables and cheese",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzR5vui5jk8Fu2mDaFAZ8wmVxZkVNjok9hmu9t-j75pg&s=10"
  },
  {
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 329,
    description: "Classic pepperoni pizza with mozzarella",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtn4OVAPpmc0OOmqlJdk2K8DODZBSibj1AVE8Rg4m2ow&s=10"
  },

  // Burger
  {
    name: "Veg Burger",
    category: "Burger",
    price: 149,
    description: "Crispy vegetable burger",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HysQoThOXdB5a5II-oqZbaYwyQ9MdU-t895zx4Yk7A&s=10"
  },
  {
    name: "Chicken Burger",
    category: "Burger",
    price: 199,
    description: "Juicy chicken burger",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDGsW4DHN1VaURDxLe-maWYBRp8UJxAPpDNIvf06IkRg&s=10"
  },
  {
    name: "Cheese Burger",
    category: "Burger",
    price: 179,
    description: "Classic burger topped with melted cheese",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWrN6eXWWFfIgt7c1txDTPM4T2znjhY8SdAHbZBU1Ow&s=10"
  },
  {
    name: "Double Chicken Burger",
    category: "Burger",
    price: 279,
    description: "Double chicken patty burger with cheese",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyywLKi9IBoocmwEdZnxtk2liISNYrP2TzIcxzv-kwnQ&s=10"
  },

  // Snacks
  {
    name: "French Fries",
    category: "Snacks",
    price: 99,
    description: "Crispy golden french fries",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6F-5hulILYwE4O6bqEy5QTbDUfrBS0p99hNZbROQ6w&s=10"
  },
  {
    name: "Chicken Wings",
    category: "Snacks",
    price: 229,
    description: "Crispy spicy chicken wings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkt4JQ4_rESdPZOjLzFuY-h2jqrwcmjrHq-eE2nfvmPQ&s=10"
  },
  {
    name: "Garlic Bread",
    category: "Snacks",
    price: 129,
    description: "Soft garlic bread with herbs and butter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNztB57pb40fCQkiyocjU4wIlvznac1sfN32vHzjmV6w&s=10"
  },
  {
    name: "Cheese Balls",
    category: "Snacks",
    price: 159,
    description: "Crispy cheese-filled snack",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuyuB-FPdZ4ZrGemZ_CBfNlIhKeU065HGDcrJSi77Xg&s=10"
  },

  // South Indian
  {
    name: "Masala Dosa",
    category: "South Indian",
    price: 129,
    description: "Crispy dosa with potato masala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDQGbrrAEW04o_3XhlIi2dpAiVhlDeB4IoH9IMcv0Mg&s=10"
  },
  {
    name: "Idli Sambar",
    category: "South Indian",
    price: 99,
    description: "Soft idlis served with hot sambar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uJs2BvyBc7cZhq746K16IxC1Mnxyaw2rVBlVZIqwg&s=10"
  },
  {
    name: "Paneer Dosa",
    category: "South Indian",
    price: 159,
    description: "Crispy dosa filled with spicy paneer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtnKzNdeBzRVg60MDYA3VV2efeyHAN5wFRQihRxItDQ&s=10"
  },
  {
    name: "Medu Vada",
    category: "South Indian",
    price: 89,
    description: "Crispy South Indian vada served with sambar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5TV10VIQ4L1oREl0c4EwK1CW154y9rjBvi5FEv8h5w&s=10"
  },
  // Indian
  {
    name: "Paneer Butter Masala",
    category: "Indian",
    price: 229,
    description: "Paneer cooked in creamy tomato gravy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7J1BbxZQZaVY7xgmOOwzeOLibVJ2kaaeL08y6e8c8bw&s=10"
  },
  {
    name: "Chicken Tikka",
    category: "Indian",
    price: 279,
    description: "Tender grilled chicken tikka",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyT-ud0cZa2oI68SSyRxCAMlfmh39qSct69K1rX8tIBw&s=10"
  },
  {
    name: "Butter Chicken",
    category: "Indian",
    price: 299,
    description: "Tender chicken cooked in creamy tomato gravy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1NR1GVTqN6vyr8NFjtSs64iPR0a4neEyfYTbzLE_OfA&s=10"
  },
  {
    name: "Dal Tadka",
    category: "Indian",
    price: 149,
    description: "Yellow dal tempered with aromatic spices",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV03GUmthqtcCUm_iQRYQMnc0-VXulJI_27ypjxlVUvg&s=10"
  },

  // Chinese
  {
    name: "Veg Noodles",
    category: "Chinese",
    price: 159,
    description: "Stir-fried noodles with fresh vegetables",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRz6Aah2uVpWZAxfC5aL6-iKE2mfqZV8kdy-naDFinUQ&s=10"
  },
  {
    name: "Chicken Noodles",
    category: "Chinese",
    price: 199,
    description: "Stir-fried noodles with chicken and vegetables",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1ktAFkwxRkcsBga-Je7ePizwdZBQnNWkb8Q94hVLDw&s=10"
  },
  {
    name: "Veg Manchurian",
    category: "Chinese",
    price: 169,
    description: "Crispy vegetable balls in Manchurian sauce",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiM-yOgU2AA2hwB0z-tmNe3_fRhoKFRovYw4YaIZF9g&s=10"
  },
  {
    name: "Chicken Fried Rice",
    category: "Chinese",
    price: 199,
    description: "Fried rice with chicken, vegetables and spices",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5iA-RFuI9-KZun_xmhOAD4nNydKASaFuKKhTWEWbh2A&s=10"
  },

  // Dessert
  {
    name: "Gulab Jamun",
    category: "Dessert",
    price: 99,
    description: "Soft sweet dumplings soaked in sugar syrup",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZpjjS6BmZBCvgVjN6J6lKqtRGJwComV4snb8HN2kKA&s=10"
  },
  {
    name: "Chocolate Cake",
    category: "Dessert",
    price: 149,
    description: "Rich and moist chocolate cake",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTM1oJ3QXJCE3L_Ett9M0N17YV6s6u59i9J0vFq_PzeA&s=10"
  }
];

module.exports = foods;