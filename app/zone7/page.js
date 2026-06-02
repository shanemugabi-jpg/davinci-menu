"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "256771753680";

const menu = [
  {
    category: "Breakfast",
    items: [
      {
        name: "Lite Breakfast",
        description:
          "Buttered toast, tomatoes, 2 fried eggs & 2 beef sausages, with a choice of tea/coffee.",
        price: 25000,
      },
      {
        name: "Full English Breakfast",
        description:
          "Buttered bread, bacon strips, 2 fried eggs & 2 beef sausages, fruits of the season, with a choice of tea/coffee & fresh juice.",
        price: 30000,
      },
      {
        name: "Uganda Katogo Breakfast",
        description: "With beef in matooke with greens.",
        price: 12000,
      },
      {
        name: "Wraps Breakfast (Zone 7 Rolex)",
        description:
          "African chapati wrap with 2 eggs, barbeque chicken strips, lettuce barbeque sauce with a choice of tea/coffee.",
        price: 25000,
      },
    ],
  },
  {
    category: "Tasty Bites",
    items: [
      { name: "Samosas", description: "Beef / vegetable.", price: 8000 },
      { name: "Sausages", description: "Beef / pork.", price: 10000 },
      { name: "Boiled Eggs", description: "", price: 1000 },
      {
        name: "UG rolex",
        description: "Chapati roll, eggs, tomato & vegetable strips.",
        price: 8000,
      },
      { name: "Bread", description: "", price: 3000 },
      { name: "Bacon", description:"", price: 15000},
      { name: "Chapati", description: "", price: 3000 },
      { name: "Omelette", description: "", price: 10000 },
      { name: "French Fries", description: "", price: 10000 },
      { name: "Masala chips", description:"", price: 12000},
      { name: "Fish Fingers", description: "", price: 20000 },
      { name: "Vegetable Spring Rolls", description: "", price: 12000 },
      { name: "Chicken Lollipops", description: "", price: 15000 },
      { name: "Chicken Wings", description: "", price: 15000 },
      { name: "Fish Fillet", description: "", price: 20000 },
      { name: "French Toast", description: "", price: 10000 },
      { name:"Sandwich", description: "", price: 20000},
    ],
  },
  {
    category: "Salads",
    items: [
      { name: "Garden Salad", description: "", price: 12000 },
      { name: "Coleslaw", description: "", price: 15000 },
      { name: "Potato salad", description: "", price: 20000 },
      { name: "Chicken & Corn Salad", description: "", price: 18000 },
      { name: "Chicken Mushroom Salad", description: "", price: 20000 },
      { name: "Caesar Salad", description: "", price: 35000 },
      { name: "Fruit Salad", description: "", price: 20000 },
    ],
  },
  {
    category: "Boiled Dishes",
    items: [
      {
        name: "Whole Boiled Local Chicken",
        description: "",
        price: 70000,
      },
      {
        name: "Quarter boiled local chicken & irish", 
        description: "",
        price: 25000,
      },
      {
        name: "Cow’s Trotters",
        description: "Kigere/ Mulokoni",
        price: 15000,
      },
    ],
  },
  {
    category: "Fried Dishes",
    items: [
      {
        name: "Kikalayi pork",
        description: "Served with matooke & salads.",
        price: 50000,
      },
      { name: "Pork", description: "Served with salad/Kachumbari.", price: 25000 },
      { name: "Liver", description: "Served with lyonnaise salad.", price: 20000 },
      { name: "Fried Goat", description: "Kachumbari", price: 30000 },
      { name: "Whole Fish Tilapia", description: "", price: 45000 },
      { name: "Chicken Biryani", description: "", price: 35000 },
      { name: "Chicken Consume", description: "", price: 30000 },
      { name: "Pan Fried Chicken", description:"", price: 30000},
      { name: "Goat Masai & Salad", description: "", price: 30000 },
      { name: "Stir Fried Beef", description: "", price: 22000 },
      { name: "Stir Fried Chicken", description: "", price: 30000 },
    ],
  },
  {
    category: "Soups",
    items: [
      { name: "Clear Mushroom Soup", description: "", price: 15000 },
      { name: "Mushroom Cream Soup", description: "", price: 17000 },
      { name: "Clear Vegetable Soup", description: "", price: 15000 },
      { name: "Vegetable Cream", description:"", price: 15000 },
      { name: "Clear Chicken Soup", description: "", price: 17000 },
      { name: "Chicken Cream", description: "", price: 20000 },
      { name: "Starter Soup", description: "", price: 10000 },
    ],
  },
  {
    category: "Curry Dishes",
    items: [
      { name: "Vegetable Curry", description: "", price: 15000 },
      { name: "Chicken Curry", description: "", price: 30000 },
      { name: "Whole fish tilapia curry", description: "", price: 45000 },
      { name: "Vegetable jalfrezi", description: "", price: 18000 },
    ],
  },
  {
    category: "Roasts / Grills",
    items: [
      {
        name: "Whole Chicken & Kachumbari",
        description: "",
        price: 50000,
      },
      {
        name: "Half Chicken & Kachumbari",
        description: "",
        price: 30000,
      },
      {
        name: "Quarter Chicken & Kachumbari",
        description: "",
        price: 20000,
      },
      {
        name: "Goat Skewers & Kachumbari",
        description: "",
        price: 25000,
      },
      { name: "Full rack Goat ribs & Kachumbari", 
       description:"",
       price: 60000,
      },
       { name: "Half rack Goat ribs & Kachumbari", 
       description:"",
       price: 30000,
      },
      {
        name: "Pork Skewers & Kachumbari",
        description: "",
        price: 25000,
      },
      {
        name: "Full rack Pork Ribs & Kachumbari",
        description: "",
        price: 60000,
      },
      { name: "Half rack Pork ribs & Kachumbari", 
       description:"",
       price: 30000,
      },
      {
        name: "Pepper Steak & Salad",
        description: "",
        price: 18000,
      },
      { name: "Whole Fish Tilapia, salad & Tartar Sauce", description: "", price: 45000 },
    ],
  },
  {
    category: "Platters",
    items: [
      {
        name: "Mixed Grill Platter",
        description:
          "Chicken, Pork/Goat, fish fingers, vegetables, spring rolls, french fries & fresh salads.",
        price: 100000,
      },
      { name: "Pork Skewers Platter", description: "", price: 75000 },
      {name: "Pork Ribs Platter", description:"", price: 80000 },
    ],
  },
  {
    category: "Pizza",
    items: [
      {
        name: "BBQ Chicken Pizza",
        description:
          "Chicken, fresh mushroom, onions, green pepper, mozzarella cheese.",
        price: 40000,
      },
      {
        name: "Margarita Pizza",
        description: "Onions, tomatoes, fresh mushrooms & mozzarella cheese.",
        price: 40000,
      },
      {
        name: "Hawaiian Pizza",
        description: "Ham, pineapple, onions, tomatoes & mozzarella cheese.",
        price: 40000,
      },
      {
        name: "Pepperoni Pizza",
        description: "Pepperoni, olives & mozzarella cheese.",
        price: 40000,
      },
    ],
  },
  {
    category: "A Little More",
    items: [
      { name: "Plain Chips & Salad", description: "", price: 10000 },
      { name: "Potato Wedges/Mashed", description: "", price: 10000 },
      { name: "Chips & Gravy Sauce", description: "", price: 15000 },
      { name: "Plain Rice", description: "Vegetable / brown.", price: 9000 },
      { name: "Plain Posho & Gravy", description: "", price: 12000 },
      { name:"Plain Posho", description:"", price: 8000 },
      {
        name: "Kachumbari / Sukumawiki / Nakati",
        description: "",
        price: 4000,
      },
      { name: "Boiled/Roasted Matooke", description: "", price: 7000 },
      { name: "Steamed vegetables", description: "", price: 7000 },
      { name: "Plantain", description: "", price: 15000 },
      { name: "Gravy", description: "", price: 5000 },
      { name: "Tartar Sauce", description: "", price: 5000 },
      { name: "Mayonnaise", description: "", price: 3000 },
    ],
  },

  {
    category: "Soft Drinks",
    items: [
      { name: "Soda 300ml", description: "", price: 4000 },
      { name: "Water 500ml", description: "", price: 3000 },
    ],
  },
  {
    category: "Juice",
    items: [
       { name: "Lemon Juice", description: "", price: 15000 },
      { name: "Passion & Ginger Juice", description: "", price: 15000 },
      { name: "Orange Juice", description: "", price: 15000 },
       { name: "Cocktail Juice", description: "", price: 15000 },
      { name: "Watermelon Juice", description: "", price: 15000 },
    ],
  },
  {
    category: "Smoothies",
    items: [
      { name: "Banana / Pineapple Smoothie",
       description: "Pineapple, Banana, Milk & Honey",
       price: 15000,
      },
      { name: "Mango / Banana Smoothie", 
       description: "Mango, Banana, Yorghurt & Milk", 
       price: 15000,
      },
      {
        name: "Pineapple / Watermelon Smoothie",
        description: "Pineapple, Watermelon, Milk & honey",
        price: 15000,
      },
    ],
  },
  {
    category: "Milkshakes",
    items: [
      { name: "Vanilla Milkshake", description: "Vanilla Ice cream, Whiped cream & Milk", price: 20000 },
      { name: "Chocolate Milkshake", description: "Chocolate Ice cream & Milk", price: 20000 },
      { name: "Strawberry Milkshake", description: "Strawberry Ice cream & Milk", price: 20000 },
      { name: "Oreo Chocolate Milkshake", description: "Oreo Cookies, chocolate & milk", price: 20000 },
    ],
  },
  {
    category: "Hot Beverages",
    items: [
      { name: "Black Tea", description: "Spiced / non-spiced.", price: 10000 },
       { name: "Lemon Tea", description: "Spiced / non-spiced.", price: 10000 },
       { name: "African Tea", description: "Spiced / non-spiced.", price: 10000 },
       { name: "Green Tea", description: "", price: 10000 },
       { name: "English Tea", description: "", price: 10000 },
       { name: "Iced Tea", description: "", price: 10000 },
       { name: "Dawa Tea", description: "", price: 15000 },
      { name: " Black Coffee", description: "", price: 10000 },
      { name: "English Coffee", description: "", price: 10000 },
      { name: "African Coffee", description: "", price: 10000 },
      { name: "Coffee Latte", description: "", price: 10000 },
      { name: "Cappuccino", description: "", price: 10000 },
      { name: "Hot Chocolate", description: "", price: 10000 },
      { name: "Espresso Coffee Single", description: "", price: 10000 },
      { name: "Espresso Coffee Double", description: "", price: 12000 },
    ],
  },
  {
    category: "Beers",
    items: [
       { name: "Local Brands", description: "", price: 8000 },
      { name: "White Cap Crisp", description: "", price: 8000 },
      { name: "Tusker Cider", description: "", price: 10000 },
      { name: "Smirnoff Red", description: "", price: 10000 },
      { name: "Smirnoff Black", description: "", price: 10000 },
      { name: "Smirnoff Guarana", description: "", price: 12000 },
      { name: "Budweiser", description: "", price: 14000 },
      { name: "Stella Artois", description: "", price: 14000 },
      { name: "Savannah", description: "", price: 14000 },
      { name: "Heineken", description: "", price: 15000 },
      { name: "Hunters", description: "Dry/Cold", price: 15000 },
      { name: "Red Bull", description: "", price: 15000 },
    ],
  },
  {
    category: "Whisky Bottles",
    items: [
      { name: "Blue Label Bottle", description: "", price: 1600000 },
      { name: "Double Black Bottle", description: "", price: 380000 },
      { name: "Black Label Bottle", description: "", price: 340000 },
      { name: "Red Label Bottle", description: "", price: 180000 },
      { name: "Gold Reserve", description: "", price: 520000 },
      { name: "Jameson Bottle", description: "", price: 270000 },
      { name: "Glenfiddich 12yrs Bottle", description: "", price: 350000 },
      { name: "Glenfiddich 15yrs Bottle", description: "", price: 480000 },
      { name: "Glenfiddich 18yrs Bottle", description: "", price: 620000 },
      { name: "Singleton 12yrs Bottle", description: "", price: 350000 },
      { name: "Singleton 18yrs Bottle", description: "", price: 620000 },
      { name: "Chivas Regal 12yrs Bottle", description: "", price: 360000 },
      { name: "Chivas Regal 18yrs Bottle", description: "", price: 740000 },
      { name: "Jack Daniel’s Fire Bottle", description: "", price: 280000 },
      { name: "Jack Daniel’s Honey Bottle", description: "", price: 280000 },
      { name: "Jack Daniel’s Bottle", description: "", price: 280000 },
      { name: "Johnnie Walker Red Bottle", description: "", price: 280000 },
      { name: "Johnnie Walker Black Bottle", description: "", price: 510000 },
      { name: "Jameson 375ml Bottle", description: "", price: 120000 },
      { name: "Jameson 1L Bottle", description: "", price: 270000 },
      { name: "Ballantines Bottle", description: "", price: 200000 },
      { name: "Famous Grouse Bottle", description: "", price: 280000 },
      { name: "J & B OR Bottle", description: "", price: 200000 },
      { name: "Black & White Bottle", description: "", price: 70000 },
    ],
  },
  {
    category: "Bottle Shots",
    items: [
      { name: "Brandy & Cognac VSOP", description: "", price: 825000 },
      { name: "VS Bottle Shot", description: "", price: 570000 },
      { name: "Martell VSOP Bottle Shot", description: "", price: 650000 },
      { name: "Martell VS Bottle Shot", description: "", price: 480000 },
      { name: "Courvoisier VSOP Bottle Shot", description: "", price: 740000 },
      { name: "Courvoisier VS Bottle Shot", description: "", price: 480000 },
      { name: "Rémy Martin VSOP Bottle Shot", description: "", price: 745000 },
      { name: "Rémy Martin VS Bottle Shot", description: "", price: 480000 },
      { name: "Hennessy VSOP Bottle Shot", description: "", price: 750000 },
      { name: "Hennessy VS Bottle Shot", description: "", price: 490000 },
      { name: "Uganda Waragi Shot", description: "", price: 20000 },
      { name: "UG Premium Gin Shot", description: "", price: 19000 },
      { name: "UG Coconut Shot", description: "", price: 19000 },
      { name: "UG Orange Shot", description: "", price: 19000 },
      { name: "UG Lemon & Ginger Shot", description: "", price: 20000 },
      { name: "Gilbey’s 750ml", description: "", price: 275000 },
      { name: "Gilbey’s 350ml", description: "", price: 195000 },
      { name: "Gilbey’s 250ml", description: "", price: 120000 },
      { name: "Gilbey’s Dry Gin", description: "", price: 180000 },
      { name: "Gordon’s Dry 200ml", description: "", price: 40000 },
      { name: "Gordon’s Dry", description: "", price: 180000 },
    ],
  },
  {
    category: "Tequila",
    items: [
      { name: "Olmeca", description: "", price: 275000 },
      { name: "Silver / Gold / Chocolate", description: "", price: 275000 },
      { name: "Don Julio", description: "", price: 565000 },
      { name: "Silver / Anejo", description: "", price: 565000 },
      { name: "La Patron", description: "", price: 565000 },
      { name: "Silver / Anejo / Gold", description: "", price: 565000 },
      { name: "B52", description: "", price: 565000 },
    ],
  },
  {
    category: "Vodka",
    items: [
      { name: "Ciroc", description: "", price: 400000 },
      { name: "Ciroc Blue Dot", description: "", price: 450000 },
      { name: "Grey Goose", description: "", price: 350000 },
      { name: "Absolut", description: "", price: 220000 },
      { name: "Smirnoff Vanilla", description: "", price: 180000 },
      { name: "Smirnoff 1L", description: "", price: 180000 },
      { name: "Smirnoff 350ml", description: "", price: 110000 },
      { name: "Skyy Vodka", description: "", price: 110000 },
    ],
  },
  {
    category: "Rum",
    items: [
      { name: "Captain Morgan", description: "", price: 180000 },
      { name: "Captain Morgan", description: "Spiced gold.", price: 180000 },
      { name: "Bacardi Gold", description: "", price: 180000 },
    ],
  },
  {
    category: "Wines",
    items: [
      { name: "Nederburg 1.5L", description: "", price: 120000 },
      { name: "KWV", description: "Red, sweet, gold, luxrose.", price: 120000 },
    ],
  },
  {
    category: "Sparkling",
    items: [
      { name: "Belle Italia 750ml", description: "", price: 160000 },
      { name: "House Wine by Glass", description: "", price: 20000 },
    ],
  },
  {
    category: "Champagne",
    items: [
      { name: "Moët & Chandon", description: "", price: 565000 },
      { name: "Moët & Chandon Imperial", description: "", price: 565000 },
    ],
  },
];

export default function Zone7Page() {
  const [cart, setCart] = useState([]);
  const [table, setTable] = useState("");
  const [notes, setNotes] = useState("");

  const addItem = (item) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.name === item.name);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const changeQty = (name, amount) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, qty: item.qty + amount } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const sendOrder = () => {
    if (!table.trim()) {
      alert("Please enter the table number first.");
      return;
    }

    if (cart.length === 0) {
      alert("Please add at least one item.");
      return;
    }

    const orderText = cart
      .map(
        (item) =>
          `${item.qty}× ${item.name} — UGX ${(
            item.price * item.qty
          ).toLocaleString()}`
      )
      .join("%0A");

    const message =
      `🍽️ New Zone 7 Order%0A%0A` +
      `Table: ${table}%0A%0A` +
      `${orderText}%0A%0A` +
      `Total: UGX ${total.toLocaleString()}%0A%0A` +
      (notes ? `Notes: ${notes}%0A%0A` : "") +
      `Powered by Spotora`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white pb-36">
      <section className="px-5 py-8 text-center border-b border-yellow-600/30">
        <h1 className="text-5xl font-black tracking-widest text-yellow-400">
          ZONE 7
        </h1>
        <p className="mt-2 text-sm tracking-[0.3em] text-gray-300">
          FOOD · DRINKS · EVENTS
        </p>
        <p className="mt-5 text-yellow-300 font-semibold">
          QR Ordering by Spotora
        </p>
      </section>

      <section className="px-5 py-6 bg-zinc-950 sticky top-0 z-20 border-b border-yellow-600/30">
        <label className="block text-yellow-400 font-bold mb-2">
          Enter Table Number
        </label>
        <input
          value={table}
          onChange={(e) => setTable(e.target.value)}
          placeholder="Example: Table 12"
          className="w-full rounded-xl px-4 py-4 bg-black border border-yellow-500 text-white outline-none"
        />
      </section>

      <section className="px-5 py-6">
        {menu.map((section) => (
          <div key={section.category} className="mb-8">
            <h2 className="text-2xl font-black text-yellow-400 mb-4">
              {section.category}
            </h2>

            <div className="space-y-3">
              {section.items.map((item) => (
                <div
                  key={`${section.category}-${item.name}-${item.price}`}
                  className="flex items-center justify-between gap-4 bg-zinc-950 border border-zinc-800 rounded-2xl p-4"
                >
                  <div className="pr-2">
                    <h3 className="font-bold">{item.name}</h3>

                    {item.description && (
                      <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    <p className="text-yellow-300 text-sm mt-2">
                      UGX {item.price.toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => addItem(item)}
                    className="bg-yellow-500 text-black font-black px-4 py-2 rounded-xl shrink-0"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-yellow-600/40 p-4">
        <div className="max-h-44 overflow-y-auto mb-3">
          {cart.length === 0 ? (
            <p className="text-gray-400 text-sm">Cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center mb-2"
              >
                <span className="text-sm">
                  {item.qty}× {item.name}
                </span>

                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => changeQty(item.name, -1)}
                    className="px-2 bg-zinc-800 rounded"
                  >
                    −
                  </button>
                  <button
                    onClick={() => changeQty(item.name, 1)}
                    className="px-2 bg-zinc-800 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Optional notes e.g. no onions, takeaway..."
          className="w-full mb-3 rounded-xl px-3 py-2 bg-black border border-zinc-700 text-white text-sm"
        />

        <button
          onClick={sendOrder}
          className="w-full bg-yellow-500 text-black font-black py-4 rounded-2xl"
        >
          Send Order · UGX {total.toLocaleString()}
        </button>
      </section>
    </main>
  );
}
