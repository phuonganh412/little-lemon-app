import greekSaladImg from "assets/greek-salad.jpg";
import bruschettaImg from "assets/bruschetta.jpg";
import lemonDessertImg from "assets/lemon-dessert.jpg";
import pastaImg from "assets/pasta.jpg";
import pizzaImg from "assets/pizza.jpg";
import chickenImg from "assets/chicken.jpg";

export const menuConfig = [
    {
        id: 1,
        title: "Greek Salad",
        price: "$12.95",
        image: greekSaladImg,
        description: "Fresh tomatoes, cucumbers, olives, and feta cheese.",
    },
    {
        id: 2,
        title: "Bruschetta",
        price: "$5.90",
        image: bruschettaImg,
        description: "Grilled bread with garlic, tomatoes, and olive oil.",
    },
    {
        id: 3,
        title: "Lemon Dessert",
        price: "$5.00",
        image: lemonDessertImg,
        description: "Sweet and tangy lemon dessert.",
    },
    {
        id: 4,
        title: "Pasta Carbonara",
        price: "$14.50",
        image: pastaImg,
        description: "Creamy pasta with bacon and parmesan.",
    },
    {
        id: 5,
        title: "Margherita Pizza",
        price: "$11.00",
        image: pizzaImg,
        description: "Classic pizza with tomato, mozzarella, and basil.",
    },
    {
        id: 6,
        title: "Grilled Chicken",
        price: "$13.50",
        image: chickenImg,
        description: "Juicy grilled chicken with herbs.",
    },
];
