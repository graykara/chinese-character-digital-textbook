import { LearnNewCharacterPageTemplate } from "@/app/pages/learn-new-character-page-template/learn-new-character-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아3.png";

export default function Page() {
  return (
    <>
      <LearnNewCharacterPageTemplate
        characters={[
          {
            chinese: "見",
            reading: "견",
            meaning: "보다",
            sound: "/sound/5/15words/1.mp3",
          },
          {
            chinese: "石",
            reading: "석",
            meaning: "돌",
            sound: "/sound/5/15words/2.mp3",
          },
          {
            chinese: "射",
            reading: "사",
            meaning: "쏘다",
            sound: "/sound/5/15words/3.mp3",
          },
          {
            chinese: "沒",
            reading: "몰",
            meaning: "빠지다",
            sound: "/sound/5/15words/4.mp3",
          },
          {
            chinese: "矢",
            reading: "시",
            meaning: "화살",
            sound: "/sound/5/15words/5.mp3",
          },
          {
            chinese: "因",
            reading: "인",
            meaning: "인하다",
            sound: "/sound/5/15words/6.mp3",
          },
          {
            chinese: "復",
            reading: ["부", "복"],
            meaning: ["다시", "돌아오다"],
            sound: "/sound/5/15words/7.mp3",
            fontSize: 38,
          },
          {
            chinese: "更",
            reading: ["갱", "경"],
            meaning: ["다시", "고치다"],
            sound: "/sound/5/15words/8.mp3",
            fontSize: 38,
          },
          {
            chinese: "終",
            reading: "종",
            meaning: "마치다",
            sound: "/sound/5/15words/9.mp3",
          },
          {
            chinese: "入",
            reading: "입",
            meaning: "들다",
            sound: "/sound/5/15words/10.mp3",
          },
          {
            chinese: "矣",
            reading: "의",
            meaning: "어조사",
            sound: "/sound/5/15words/11.mp3",
          },
          {
            chinese: "力",
            reading: "력",
            meaning: "힘",
            sound: "/sound/5/15words/12.mp3",
          },
        ]}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
