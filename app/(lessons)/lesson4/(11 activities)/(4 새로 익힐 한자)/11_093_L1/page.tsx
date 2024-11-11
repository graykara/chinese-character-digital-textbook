import { LearnNewCharacterPageTemplate } from "@/app/pages/learn-new-character-page-template/learn-new-character-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아3.png";

export default function Page() {
  return (
    <>
      <LearnNewCharacterPageTemplate
        characters={[
          {
            chinese: "去",
            reading: "거",
            meaning: "가다",
            sound: "/sound/4/11words/1.mp3",
          },
          {
            chinese: "美",
            reading: "미",
            meaning: "아름답다",
            sound: "/sound/4/11words/2.mp3",
          },
          {
            chinese: "己",
            reading: "기",
            meaning: "몸,자기",
            sound: "/sound/4/11words/3.mp3",
          },
          {
            chinese: "所",
            reading: "소",
            meaning: "바",
            sound: "/sound/4/11words/4.mp3",
          },
          {
            chinese: "欲",
            reading: "욕",
            meaning: "하고자 하다",
            sound: "/sound/4/11words/5.mp3",
          },
          {
            chinese: "勿",
            reading: "물",
            meaning: "말다",
            sound: "/sound/4/11words/6.mp3",
          },
          {
            chinese: "施",
            reading: "시",
            meaning: "베풀다",
            sound: "/sound/4/11words/7.mp3",
          },
          {
            chinese: "於",
            reading: "어",
            meaning: "어조사",
            sound: "/sound/4/11words/8.mp3",
          },
          {
            chinese: "道",
            reading: "도",
            meaning: "길,말하다",
            sound: "/sound/4/11words/9.mp3",
          },
          {
            chinese: "短",
            reading: "단",
            meaning: "짧다,단점",
            sound: "/sound/4/11words/10.mp3",
          },
          {
            chinese: "說",
            reading: "설",
            meaning: "말하다",
            sound: "/sound/4/11words/11.mp3",
          },
          {
            chinese: "長",
            reading: "장",
            meaning: "길다,장점",
            sound: "/sound/4/11words/12.mp3",
          },
          {
            chinese: "愛",
            reading: "애",
            meaning: "사랑하다",
            sound: "/sound/4/11words/13.mp3",
          },
          {
            chinese: "恒",
            reading: "항",
            meaning: "항상",
            sound: "/sound/4/11words/14.mp3",
          },
          {
            chinese: "敬",
            reading: "경",
            meaning: "공경하다",
            sound: "/sound/4/11words/15.mp3",
          },
          {
            chinese: "學",
            reading: "학",
            meaning: "배우다",
            sound: "/sound/4/11words/20.mp3",
          },
          {
            chinese: "孔",
            reading: "공",
            meaning: "구멍, 성씨",
            sound: "/sound/4/11words/21.mp3",
          },
          {
            chinese: "禮",
            reading: "례",
            meaning: "예절",
            sound: "/sound/4/11words/22.mp3",
          },
          {
            chinese: "老",
            reading: "로",
            meaning: "늙다",
            sound: "/sound/4/11words/23.mp3",
          },
          {
            chinese: "暴",
            reading: "폭",
            meaning: "사납다",
            sound: "/sound/4/11words/16.mp3",
          },
          {
            chinese: "政",
            reading: "정",
            meaning: "정사",
            sound: "/sound/4/11words/17.mp3",
          },
          {
            chinese: "異",
            reading: "이",
            meaning: "다르다",
            sound: "/sound/4/11words/18.mp3",
          },
          {
            chinese: "常",
            reading: "상",
            meaning: "항상",
            sound: "/sound/4/11words/19.mp3",
          },
        ]}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
