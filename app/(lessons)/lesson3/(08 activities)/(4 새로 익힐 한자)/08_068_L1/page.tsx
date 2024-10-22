import { LearnNewCharacterPageTemplate } from "@/app/pages/learn-new-character-page-template/learn-new-character-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아3.png";

export default function Page() {
  return (
    <>
      <LearnNewCharacterPageTemplate
        characters={[
          {
            chinese: "龍",
            reading: "룡",
            meaning: "용",
            sound: "/sound/3/08words/1.mp3",
          },
          {
            chinese: "頭",
            reading: "두",
            meaning: "머리",
            sound: "/sound/3/08words/2.mp3",
          },
          {
            chinese: "蛇",
            reading: "사",
            meaning: "뱀",
            sound: "/sound/3/08words/3.mp3",
          },
          {
            chinese: "尾",
            reading: "미",
            meaning: "꼬리",
            sound: "/sound/3/08words/4.mp3",
          },
          {
            chinese: "易",
            reading: ["역", "이"],
            meaning: ["바꾸다", "쉽다"],
            sound: "/sound/3/08words/5.mp3",
          },
          {
            chinese: "之",
            reading: "지",
            meaning: "어조사",
            sound: "/sound/3/08words/7.mp3",
          },
          {
            chinese: "苦",
            reading: "고",
            meaning: "쓰다",
            sound: "/sound/3/08words/8.mp3",
          },
          {
            chinese: "盡",
            reading: "진",
            meaning: "다하다, 모두",
            sound: "/sound/3/08words/9.mp3",
          },
          {
            chinese: "甘",
            reading: "감",
            meaning: "달다",
            sound: "/sound/3/08words/10.mp3",
          },
          {
            chinese: "來",
            reading: "래",
            meaning: "오다",
            sound: "/sound/3/08words/11.mp3",
          },
          {
            chinese: "雪",
            reading: "설",
            meaning: "눈",
            sound: "/sound/3/08words/12.mp3",
          },
          {
            chinese: "加",
            reading: "가",
            meaning: "더하다",
            sound: "/sound/3/08words/13.mp3",
          },
          {
            chinese: "霜",
            reading: "상",
            meaning: "서리",
            sound: "/sound/3/08words/14.mp3",
          },
        ]}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
