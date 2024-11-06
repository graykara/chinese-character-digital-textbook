import { LearnNewCharacterPageTemplate } from "@/app/pages/learn-new-character-page-template/learn-new-character-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아3.png";

export default function Page() {
  return (
    <>
      <LearnNewCharacterPageTemplate
        characters={[
          {
            chinese: "雖",
            reading: "수",
            meaning: "비록",
            sound: "/sound/5/13words/1.mp3",
          },
          {
            chinese: "畜",
            reading: "축",
            meaning: "기르다, 짐승",
            sound: "/sound/5/13words/2.mp3",
          },
          {
            chinese: "物",
            reading: "물",
            meaning: "물건",
            sound: "/sound/5/13words/3.mp3",
          },
          {
            chinese: "其",
            reading: "기",
            meaning: "그",
            sound: "/sound/5/13words/4.mp3",
          },
          {
            chinese: "與",
            reading: "여",
            meaning: "더불다",
            sound: "/sound/5/13words/5.mp3",
          },
          {
            chinese: "此",
            reading: "차",
            meaning: "이",
            sound: "/sound/5/13words/6.mp3",
          },
          {
            chinese: "勝",
            reading: "승",
            meaning: "이기다, 낫다",
            sound: "/sound/5/13words/7.mp3",
          },
          {
            chinese: "則",
            reading: "즉",
            meaning: "곧",
            sound: "/sound/5/13words/8.mp3",
          },
          {
            chinese: "彼",
            reading: "피",
            meaning: "저",
            sound: "/sound/5/13words/9.mp3",
          },
          {
            chinese: "劣",
            reading: "렬",
            meaning: "못하다",
            sound: "/sound/5/13words/10.mp3",
          },
          {
            chinese: "使",
            reading: "사",
            meaning: "하여금",
            sound: "/sound/5/13words/11.mp3",
          },
          {
            chinese: "牛",
            reading: "우",
            meaning: "소",
            sound: "/sound/5/13words/12.mp3",
          },
          {
            chinese: "寧",
            reading: "녕",
            meaning: "어찌",
            sound: "/sound/5/13words/13.mp3",
          },
          {
            chinese: "平",
            reading: "평",
            meaning: "평평하다",
            sound: "/sound/5/13words/14.mp3",
          },
          {
            chinese: "乎",
            reading: "호",
            meaning: "어조사",
            sound: "/sound/5/13words/15.mp3",
          },
          {
            chinese: "行",
            reading: "행",
            meaning: "다니다",
            sound: "/sound/5/13words/16.mp3",
          },
          {
            chinese: "惡",
            reading: "악",
            meaning: "나쁘다",
            sound: "/sound/5/13words/17.mp3",
          },
          {
            chinese: "家",
            reading: "가",
            meaning: "집",
            sound: "/sound/5/13words/18.mp3",
          },
        ]}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
