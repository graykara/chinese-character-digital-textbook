import { LearnNewCharacterPageTemplate } from "@/app/pages/learn-new-character-page-template/learn-new-character-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아3.png";

export default function Page() {
  return (
    <>
      <LearnNewCharacterPageTemplate
        characters={[
          {
            chinese: "山",
            reading: "산",
            meaning: "산",
            sound: "/sound/2/03words/1.mp3",
          },
          {
            chinese: "月",
            reading: "월",
            meaning: "달",
            sound: "/sound/2/03words/2.mp3",
          },
          {
            chinese: "火",
            reading: "화",
            meaning: "불",
            sound: "/sound/2/03words/3.mp3",
          },
          {
            chinese: "木",
            reading: "목",
            meaning: "나무",
            sound: "/sound/2/03words/4.mp3",
          },
          {
            chinese: "一",
            reading: "일",
            meaning: "하나",
            sound: "/sound/2/03words/5.mp3",
          },
          {
            chinese: "二",
            reading: "이",
            meaning: "둘",
            sound: "/sound/2/03words/6.mp3",
          },
          {
            chinese: "上",
            reading: "상",
            meaning: "위",
            sound: "/sound/2/03words/7.mp3",
          },
          {
            chinese: "下",
            reading: "하",
            meaning: "아래",
            sound: "/sound/2/03words/8.mp3",
          },
          {
            chinese: "本",
            reading: "본",
            meaning: "근본",
            sound: "/sound/2/03words/9.mp3",
          },
          {
            chinese: "末",
            reading: "말",
            meaning: "끝",
            sound: "/sound/2/03words/10.mp3",
          },
          {
            chinese: "四",
            reading: "사",
            meaning: "넷",
            sound: "/sound/2/03words/11.mp3",
          },
          {
            chinese: "五",
            reading: "오",
            meaning: "다섯",
            sound: "/sound/2/03words/12.mp3",
          },
          {
            chinese: "六",
            reading: "륙",
            meaning: "여섯",
            sound: "/sound/2/03words/13.mp3",
          },
          {
            chinese: "七",
            reading: "칠",
            meaning: "입곱",
            sound: "/sound/2/03words/14.mp3",
          },
          {
            chinese: "九",
            reading: "구",
            meaning: "아홉",
            sound: "/sound/2/03words/15.mp3",
          },
          {
            chinese: "壹",
            reading: "일",
            meaning: "하나",
            sound: "/sound/2/03words/16.mp3",
          },
          {
            chinese: "貳",
            reading: "이",
            meaning: "둘",
            sound: "/sound/2/03words/17.mp3",
          },
          {
            chinese: "參",
            reading: ["참", "삼"],
            meaning: ["참여하다", "셋"],
            sound: "/sound/2/03words/18.mp3",
            fontSize: 40,
          },
          {
            chinese: "肆",
            reading: "사",
            meaning: "넷",
            sound: "/sound/2/03words/19.mp3",
          },
          {
            chinese: "伍",
            reading: "오",
            meaning: "다섯",
            sound: "/sound/2/03words/20.mp3",
          },
        ]}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
