"use client";

import { useState } from "react";
import { Button } from "./components/buttons/button";

type Menu = {
  mark: string;
  text: string;
  color: string;
};

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);

  const menu = [
    {
      mark: "/images/mark1.png",
      text: "/images/text1.png",
      color: "#163a47",
    },
    {
      mark: "/images/mark2.png",
      text: "/images/text2.png",
      color: "#8f7b6b",
    },
    {
      mark: "/images/mark3.png",
      text: "/images/text3.png",
      color: "#863a49",
    },
    {
      mark: "/images/mark4.png",
      text: "/images/text4.png",
      color: "#8e8e8e",
    },
    {
      mark: "/images/mark5.png",
      text: "/images/text5.png",
      color: "#e3b04b",
    },
  ];

  return (
    <main
      className="relative w-full h-full"
      style={{
        backgroundImage: `url('/images/main-background.png')`,
      }}
    >
      <div className="absolute left-[610px] top-[174px] flex flex-col">
        {menu.map((item, index) => (
          <Button
            className="flex items-center gap-4 my-[-1px]"
            onClick={() => setSelectedMenu(item)}
          >
            <img src={item.mark} alt="mark" />
            <img src={item.text} alt="text" />
          </Button>
        ))}
      </div>

      {/* 219 */}

      {selectedMenu ? (
        <div
          className="absolute left-[828px] top-[219px] w-[610px] h-[636px] rounded-r-3xl text-white pl-[63px] pt-[37px]"
          style={{ backgroundColor: selectedMenu.color }}
        >
          <p className="font-haeseo">安</p>
        </div>
      ) : null}
    </main>
  );
}
