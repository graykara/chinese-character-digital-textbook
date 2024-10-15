import { LearnNewCharacterPageTemplate } from "@/app/pages/learn-new-character-page-template/learn-new-character-page-template";

export default function Page() {
  return (
    <>
      <LearnNewCharacterPageTemplate
        characters={[
          {
            chinese: "林",
            reading: "림",
            meaning: "수풀",
            sound: "/sound/2/04words/1.mp3",
          },
          {
            chinese: "明",
            reading: "명",
            meaning: "밝다",
            sound: "/sound/2/04words/2.mp3",
          },
          {
            chinese: "女",
            reading: "녀",
            meaning: "여자",
            sound: "/sound/2/04words/3.mp3",
          },
          {
            chinese: "子",
            reading: "자",
            meaning: "아들, 자식",
            sound: "/sound/2/04words/4.mp3",
          },
          {
            chinese: "好",
            reading: "호",
            meaning: "좋다",
            sound: "/sound/2/04words/5.mp3",
          },
          {
            chinese: "夕",
            reading: "석",
            meaning: "저녁",
            sound: "/sound/2/04words/6.mp3",
          },
          {
            chinese: "名",
            reading: "명",
            meaning: "이름",
            sound: "/sound/2/04words/7.mp3",
          },
          {
            chinese: "門",
            reading: "문",
            meaning: "문",
            sound: "/sound/2/04words/8.mp3",
          },
          {
            chinese: "問",
            reading: "문",
            meaning: "묻다",
            sound: "/sound/2/04words/9.mp3",
          },
          {
            chinese: "耳",
            reading: "이",
            meaning: "귀",
            sound: "/sound/2/04words/10.mp3",
          },
          {
            chinese: "聞",
            reading: "문",
            meaning: "듣다",
            sound: "/sound/2/04words/11.mp3",
          },
          {
            chinese: "每",
            reading: "매",
            meaning: "매양",
            sound: "/sound/2/04words/12.mp3",
          },
          {
            chinese: "羊",
            reading: "양",
            meaning: "양",
            sound: "/sound/2/04words/13.mp3",
          },
          {
            chinese: "洋",
            reading: "양",
            meaning: "큰바다",
            sound: "/sound/2/04words/14.mp3",
          },
          {
            chinese: "年",
            reading: "년",
            meaning: "해, 나이",
            sound: "/sound/2/04words/15.mp3",
          },
          {
            chinese: "無",
            reading: "무",
            meaning: "없다",
            sound: "/sound/2/04words/16.mp3",
          },
          {
            chinese: "地",
            reading: "지",
            meaning: "땅, 처지",
            sound: "/sound/2/04words/17.mp3",
          },
          {
            chinese: "食",
            reading: "식",
            meaning: "먹다",
            sound: "/sound/2/04words/18.mp3",
          },
        ]}
      />
    </>
  );
}
