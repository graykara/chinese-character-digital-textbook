import { useContext, useEffect } from "react";
import { PageInfoContext } from "../utils/page-info";
import { activityStartSound } from "../utils/activity-start-sound";
import { SOUND } from "../utils/sound-player";

export const SoundStopper = () => {
    const { currentStep, currentChapter, currentLesson, currentSubChapter, soundOnStep } =
        useContext(PageInfoContext);

    useEffect(() => {
        Howler.stop();
        if (!soundOnStep) activityStartSound.play();
        else if (typeof soundOnStep === "string") SOUND(soundOnStep).play();
        else soundOnStep.play();
    }, [currentStep, currentChapter, currentLesson, currentSubChapter]);

    return null;
};
