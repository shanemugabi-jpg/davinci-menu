"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "256771753680";

const menu = [
  { category: "Breakfast", items: [
    ["Lite Breakfast", 25000], ["Full English Breakfast", 30000],
    ["Ugandan Katogo Breakfast", 15000], ["Wraps Breakfast", 25000]
  ]},
  { category: "Tasty Bites", items: [
    ["Samosas", 8000], ["Sausages", 10000], ["Boiled Eggs", 8000],
    ["Beef Mushrooms", 15000], ["Omelette", 10000],
    ["French Fries", 10000], ["Masala Chips", 12000],
    ["Chicken Wings", 20000], ["Chapati", 3000]
  ]},
  { category: "Salads & Soups", items: [
    ["Garden Salad", 12000], ["Chicken Salad", 18000],
    ["Chicken & Corn Soup", 20000], ["Vegetable Soup", 15000],
    ["Chicken Cream Soup", 20000], ["Starter Soup", 10000]
  ]},
  { category: "Boiled Dishes", items: [
    ["Whole Broiled Local Chicken", 70000],
    ["1/4 Local Boiled Chicken", 25000],
    ["Cow’s Trotters", 15000]
  ]},
  { category: "Fried Dishes", items: [
    ["Kikalayi Pork Matooke & Salad", 50000],
    ["Fried Goat Katumbari", 30000],
    ["Chicken Biryani", 35000],
    ["Goat Maasai & Salad", 30000],
    ["Stir Fried Chicken", 30000]
  ]},
  { category: "Curry Dishes", items: [
    ["Vegetable Curry", 15000], ["Chicken Curry", 35000],
    ["Whole Tilapia Curry", 45000], ["Vegetable Jalfrezi", 18000]
  ]},
  { category: "Roasts / Grills", items: [
    ["Whole Chicken & Katumbari", 50000],
    ["Half Chicken & Katumbari", 30000],
    ["Full Rack Goat Ribs & Katumbari", 60000],
    ["Half Rack Goat Ribs & Katumbari", 30000],
    ["Pork Skewers & Katumbari", 25000],
    ["Whole Fish Tilapia Salad & Tartar Sauce", 45000]
  ]},
  { category: "Pizza", items: [
    ["BBQ Chicken Pizza", 40000],
    ["Hawaiian Pizza", 40000],
    ["Margarita Pizza", 40000],
    ["Pepperoni Pizza", 40000]
  ]},
  { category: "Soft Drinks", items: [
    ["Soda 300ml", 4000], ["Water 500ml", 3000],
    ["Juice", 15000], ["Smoothie", 15000], ["Milkshake", 20000]
  ]},
  { category: "Hot Beverages", items: [
    ["Black Tea", 10000], ["Lemon Tea", 10000],
    ["African Tea", 10000], ["Coffee Latte", 10000],
    ["Hot Chocolate", 10000], ["Espresso Single", 10000]
  ]},
];

export default function Zone7Page() {
  const [cart, setCart] = useState([]);
  const [table, setTable] = useState("");
  const [notes, setNotes] = useState("");

  const addItem = (name, price) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing) {
        return prev.map((item) =>
          item.name === name ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { name, price, qty: 1 }];
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
          `${item.qty}× ${item.name} — UGX ${(item.price * item.qty).toLocaleString()}`
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
    <main className="min-h-screen bg-black text-white pb-32">
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
              {section.items.map(([name, price]) => (
                <div
                  key={name}
                  className="flex items-center justify-between gap-4 bg-zinc-950 border border-zinc-800 rounded-2xl p-4"
                >
                  <div>
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-yellow-300 text-sm">
                      UGX {price.toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => addItem(name, price)}
                    className="bg-yellow-500 text-black font-black px-4 py-2 rounded-xl"
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
              <div key={item.name} className="flex justify-between items-center mb-2">
                <span className="text-sm">
                  {item.qty}× {item.name}
                </span>
                <div className="flex gap-2 items-center">
                  <button onClick={() => changeQty(item.name, -1)} className="px-2 bg-zinc-800 rounded">
                    −
                  </button>
                  <button onClick={() => changeQty(item.name, 1)} className="px-2 bg-zinc-800 rounded">
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
