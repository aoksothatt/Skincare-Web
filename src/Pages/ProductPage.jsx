import React, { useState } from "react";
import Card from "../components/Card";

const ProductPage = () => {
  const [value, setValue] = useState(40);

  return (
    <main>
      <div className="max-w-sm relative mt-10 mx-10 flex justify-end-safe ">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-green-800 px-5 rounded-3xl py-1"
        />
        <i className="bi bi-search absolute translate-1.5 translate-x-[-175%] text-[14px]"></i>
      </div>

      <section className="my-5 px-10 grid grid-cols-[350px_4fr] gap-1 max-w-full h-screen">
        <div className="bg-red-100 p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-6">
            Filter Section
          </h1>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold mb-2">Category</h2>

            <label className="flex items-center gap-3 cursor-pointer hover:bg-red-200 p-2 rounded transition">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-primary border-2"
              />
              <span className="text-base">Sunscreen</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer hover:bg-red-200 p-2 rounded transition">
              <input
                type="checkbox"
                className="checkbox checkbox-secondary border-2"
              />
              <span className="text-base">Cleanser</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer hover:bg-red-200 p-2 rounded transition">
              <input
                type="checkbox"
                className="checkbox checkbox-secondary border-2"
              />
              <span className="text-base">Moisturizer</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer hover:bg-red-200 p-2 rounded transition">
              <input
                type="checkbox"
                className="checkbox checkbox-secondary border-2"
              />
              <span className="text-base">Serum</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer hover:bg-red-200 p-2 rounded transition">
              <input
                type="checkbox"
                className="checkbox checkbox-secondary border-2"
              />
              <span className="text-base">Toner</span>
            </label>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Price Range</h2>
            <input
              type="range"
              min={0}
              max={100}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="range range-primary w-full"
            />
            <p className="text-center mt-2 font-semibold">Price: ${value}</p>
          </div>
        </div>

        <div className="bg-blue-400 p-2">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(195px,1fr))] gap-x-3 gap-y-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
