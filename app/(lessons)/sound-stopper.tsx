import { useContext, useEffect } from "react";
import { PageInfoContext } from "../utils/page-info";
import { activityStartSound } from "../utils/activity-start-sound";

export const SoundStopper = () => {
    const { currentStep, currentChapter, currentLesson, currentSubChapter } =
        useContext(PageInfoContext);

    useEffect(() => {
        Howler.stop();
        activityStartSound.play();
    }, [currentStep, currentChapter, currentLesson, currentSubChapter]);

    return null;
};
