import { LearnNewCharacterPageTemplate } from "@/app/pages/learn-new-character-page-template/learn-new-character-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아3.png";

export default function Page() {
  return (
    <>
      <LearnNewCharacterPageTemplate
        characters={[
          {
            chinese: "萬",
            reading: "만",
            meaning: "일만",
            sound: "/sound/5/16words/1.mp3",
          },
          {
            chinese: "德",
            reading: "덕",
            meaning: "덕",
            sound: "/sound/5/16words/2.mp3",
          },
          {
            chinese: "取",
            reading: "취",
            meaning: "취하다",
            sound: "/sound/5/16words/3.mp3",
          },
          {
            chinese: "活",
            reading: "활",
            meaning: "살다",
            sound: "/sound/5/16words/4.mp3",
          },
          {
            chinese: "親",
            reading: "친",
            meaning: "친하다",
            sound: "/sound/5/16words/5.mp3",
          },
          {
            chinese: "族",
            reading: "족",
            meaning: "겨레",
            sound: "/sound/5/16words/6.mp3",
          },
          {
            chinese: "餘",
            reading: "여",
            meaning: "남다",
            sound: "/sound/5/16words/7.mp3",
          },
          {
            chinese: "輸",
            reading: "수",
            meaning: "보내다",
            sound: "/sound/5/16words/8.mp3",
          },
          {
            chinese: "官",
            reading: "관",
            meaning: "벼슬",
            sound: "/sound/5/16words/9.mp3",
          },
          {
            chinese: "浮",
            reading: "부",
            meaning: "뜨다",
            sound: "/sound/5/16words/10.mp3",
          },
          {
            chinese: "黃",
            reading: "황",
            meaning: "누렇다",
            sound: "/sound/5/16words/11.mp3",
          },
          {
            chinese: "集",
            reading: "집",
            meaning: "모이다",
            sound: "/sound/5/16words/12.mp3",
          },
          {
            chinese: "庭",
            reading: "정",
            meaning: "뜰",
            sound: "/sound/5/16words/13.mp3",
          },
          {
            chinese: "如",
            reading: "여",
            meaning: "같다",
            sound: "/sound/5/16words/14.mp3",
          },
          {
            chinese: "雲",
            reading: "운",
            meaning: "구름",
            sound: "/sound/5/16words/15.mp3",
          },
          {
            chinese: "男",
            reading: "남",
            meaning: "남자",
            sound: "/sound/5/16words/16.mp3",
          },
          {
            chinese: "若",
            reading: "약",
            meaning: "같다",
            sound: "/sound/5/16words/17.mp3",
          },
          {
            chinese: "頌",
            reading: "송",
            meaning: "기리다, 칭송하다",
            sound: "/sound/5/16words/18.mp3",
            fontSize: 38,
          },
        ]}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
