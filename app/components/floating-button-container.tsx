import { useState } from "react";
import { Button } from "./buttons/button";

export const FloatingButtonContainer = () => {
  const [showClassIcons, setShowClassIcons] = useState(false);
  const [showSpecialIcons, setShowSpecialIcons] = useState(false);

  const classIcons = [
    { icon: "/icons/floating/attention.svg", link: "" },
    {
      icon: "/icons/floating/kkamkkam.svg",
      link: "http://heyhey.com/@ybm@/@HIEN@/studyhelper/kkamkkam/kkamkkam.html",
    },
    {
      icon: "/icons/floating/board_draw.svg",
      link: "http://heyhey.com/@ybm@/@HIEN@/studyhelper/board_drawing/board_draw.html",
    },
    {
      icon: "/icons/floating/timer.svg",
      link: "http://heyhey.com/@ybm@/@HIEN@/studyhelper/timer/timer.html",
    },
    { icon: "/icons/floating/blind.svg", link: "" },
    {
      icon: "/icons/floating/baseball.svg",
      link: "http://heyhey.com/@ybm@/@HIEN@/studyhelper/baseball2/baseball.html",
    },
    {
      icon: "/icons/floating/sticker2.svg",
      link: "http://heyhey.com/@ybm@/@HIEN@/studyhelper/sticker2/sticker2.html",
    },
    {
      icon: "/icons/floating/roulette.svg",
      link: "http://heyhey.com/@ybm@/@HIEN@/studyhelper/roulette/roulette.html",
    },
  ];

  const specialIcons = [
    { icon: "/icons/floating/icon_gurigi.svg", link: "" },
    { icon: "/icons/floating/icon_memo.svg", link: "" },
    { icon: "/icons/floating/icon_magiczoom.svg", link: "" },
  ];

  return (
    <div className="fixed right-[0px] top-[120px] w-[60px]">
      <section className="mb-4">
        <Button
          onClick={() => setShowClassIcons(!showClassIcons)}
          className="hover:shadow-lg transition"
        >
          <img src="/icons/floating/class_icon.png" />
        </Button>

        {showClassIcons ? (
          <div className="bg-white p-1 rounded-xl flex flex-col gap-13 shadow-lg">
            {classIcons.map(({ icon, link }) => (
              <a href={link} target="_blank">
                <img className="w-full" src={icon} />
              </a>
            ))}
          </div>
        ) : null}
      </section>

      <Button
        onClick={() => setShowSpecialIcons(!showSpecialIcons)}
        className="hover:shadow-lg transition"
      >
        <img src="/icons/floating/special_icon.png" />
      </Button>

      {showSpecialIcons ? (
        <div className="bg-white p-1 rounded-xl flex flex-col gap-13 shadow-lg">
          {specialIcons.map(({ icon, link }) => (
            <a href={link} target="_blank">
              <img className="w-full" src={icon} />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
};
