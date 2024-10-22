import { LearnNewCharacterPageTemplate } from "@/app/pages/learn-new-character-page-template/learn-new-character-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아3.png";

export default function Page() {
  return (
    <>
      <LearnNewCharacterPageTemplate
        characters={[
          {
            chinese: "足",
            reading: "족",
            meaning: "발, 만족하다",
            sound: "/sound/3/09words/1.mp3",
          },
          {
            chinese: "指",
            reading: "지",
            meaning: "가리키다",
            sound: "/sound/3/09words/2.mp3",
          },
          {
            chinese: "鹿",
            reading: "록",
            meaning: "사슴",
            sound: "/sound/3/09words/3.mp3",
          },
          {
            chinese: "爲",
            reading: "위",
            meaning: "하다",
            sound: "/sound/3/09words/4.mp3",
          },
          {
            chinese: "漁",
            reading: "어",
            meaning: "고기잡다",
            sound: "/sound/3/09words/5.mp3",
          },
          {
            chinese: "父",
            reading: "부",
            meaning: "아버지",
            sound: "/sound/3/09words/6.mp3",
          },
          {
            chinese: "利",
            reading: "리",
            meaning: "이롭다",
            sound: "/sound/3/09words/7.mp3",
          },
          {
            chinese: "朝",
            reading: "조",
            meaning: "아침",
            sound: "/sound/3/09words/8.mp3",
          },
          {
            chinese: "暮",
            reading: "모",
            meaning: "저물다",
            sound: "/sound/3/09words/9.mp3",
          },
          {
            chinese: "示",
            reading: "시",
            meaning: "보다",
            sound: "/sound/3/09words/10.mp3",
          },
          {
            chinese: "目",
            reading: "목",
            meaning: "눈",
            sound: "/sound/3/09words/11.mp3",
          },
          {
            chinese: "滿",
            reading: "만",
            meaning: "가득 차다",
            sound: "/sound/3/09words/12.mp3",
          },
          {
            chinese: "手",
            reading: "수",
            meaning: "손",
            sound: "/sound/3/09words/13.mp3",
          },
          {
            chinese: "不",
            reading: "불/부",
            meaning: "아니다",
            sound: "/sound/3/09words/14.mp3",
          },
          {
            chinese: "益",
            reading: "익",
            meaning: "더하다, 더욱",
            sound: "/sound/3/09words/15.mp3",
          },
        ]}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
