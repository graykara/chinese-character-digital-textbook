import { LearnNewCharacterPageTemplate } from "@/app/pages/learn-new-character-page-template/learn-new-character-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아3.png";

export default function Page() {
  return (
    <>
      <LearnNewCharacterPageTemplate
        characters={[
          {
            chinese: "志",
            reading: "지",
            meaning: "뜻",
            sound: "/sound/4/12words/1.mp3",
          },
          {
            chinese: "事",
            reading: "사",
            meaning: "일",
            sound: "/sound/4/12words/2.mp3",
          },
          {
            chinese: "竟",
            reading: "경",
            meaning: "마침내",
            sound: "/sound/4/12words/3.mp3",
          },
          {
            chinese: "也",
            reading: "야",
            meaning: "어조사",
            sound: "/sound/4/12words/4.mp3",
          },
          {
            chinese: "能",
            reading: "능",
            meaning: "능하다",
            sound: "/sound/4/12words/5.mp3",
          },
          {
            chinese: "經",
            reading: "경",
            meaning: "지나다, 경험하다",
            sound: "/sound/4/12words/6.mp3",
          },
          {
            chinese: "智",
            reading: "지",
            meaning: "지혜",
            sound: "/sound/4/12words/7.mp3",
          },
          {
            chinese: "百",
            reading: "백",
            meaning: "일백",
            sound: "/sound/4/12words/8.mp3",
          },
          {
            chinese: "知",
            reading: "지",
            meaning: "알다",
            sound: "/sound/4/12words/9.mp3",
          },
          {
            chinese: "識",
            reading: "식",
            meaning: "알다",
            sound: "/sound/4/12words/10.mp3",
          },
        ]}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
