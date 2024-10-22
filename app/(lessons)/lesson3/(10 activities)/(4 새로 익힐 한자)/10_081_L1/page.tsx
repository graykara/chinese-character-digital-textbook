import { LearnNewCharacterPageTemplate } from "@/app/pages/learn-new-character-page-template/learn-new-character-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아3.png";

export default function Page() {
  return (
    <>
      <LearnNewCharacterPageTemplate
        characters={[
          {
            chinese: "背",
            reading: "배",
            meaning: "등지다",
            sound: "/sound/10words/1.mp3",
          },
          {
            chinese: "陣",
            reading: "진",
            meaning: "진 치다",
            sound: "/sound/10words/2.mp3",
          },
          {
            chinese: "善",
            reading: "선",
            meaning: "착하다, 좋다",
            sound: "/sound/10words/3.mp3",
          },
          {
            chinese: "虎",
            reading: "호",
            meaning: "호랑이",
            sound: "/sound/10words/4.mp3",
          },
          {
            chinese: "結",
            reading: "결",
            meaning: "맺다",
            sound: "/sound/10words/5.mp3",
          },
          {
            chinese: "草",
            reading: "초",
            meaning: "풀",
            sound: "/sound/10words/6.mp3",
          },
          {
            chinese: "報",
            reading: "보",
            meaning: "알리다, 갚다",
            sound: "/sound/10words/7.mp3",
          },
          {
            chinese: "恩",
            reading: "은",
            meaning: "은혜",
            sound: "/sound/10words/8.mp3",
          },
        ]}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
