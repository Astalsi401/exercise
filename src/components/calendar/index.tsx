import * as stylex from "@stylexjs/stylex";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ExerciseEdit } from "@/components/modal/exercise-edit";
import { updateStore, updateInfoTab, infoTabDefault, store } from "@/store";
import { background, colors, effect, fontSize, fontWeights, layout, sizing, spacing, textAlign } from "@/assets/styles/index.stylex";
import type { Week } from "@/types";

const weekdays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const dayDelta = (date: Date, day: number) => new Date(date.getTime() + day * 24 * 60 * 60 * 1000);

export const Calendar: React.FC = () => {
  const dispatch = useDispatch();
  const tabRef = useRef<HTMLDivElement>(null);
  const [currentWeek, setCurrentWeek] = useState<Week>([]);
  const getCurrentWeek = (date: Date) => {
    const start = Array.from({ length: 7 }, (_, i) => dayDelta(date, i - 6)).find((d) => d.getDay() === 1);
    start && setCurrentWeek(Array.from({ length: 7 }, (_, i) => dayDelta(start, i)));
  };
  const toggleTab = ({ target }: MouseEvent) => {
    if (tabRef.current === target || tabRef.current?.contains(target as Node)) return;
    dispatch(updateStore({ infoTabActive: !store.getState().infoTabActive, infoTabEditing: !store.getState().infoTabEditing }));
  };
  useEffect(() => {
    getCurrentWeek(new Date());
    document.addEventListener("click", toggleTab);
    return () => document.removeEventListener("click", toggleTab);
  }, []);
  return (
    <div {...stylex.props(sizing.hCustom("min(100vh, 500px)"), layout.d("grid"), layout.cols(7))}>
      <ExerciseEdit tabRef={tabRef} />
      {currentWeek.map((day) => (
        <DateColumn key={day.toDateString()} day={day} />
      ))}
    </div>
  );
};

type DateColumnProps = { day: Date };
const DateColumn: React.FC<DateColumnProps> = ({ day }) => {
  const dispatch = useDispatch();
  const addExercise = () => {
    console.log("add exercise");
    dispatch(updateInfoTab({ ...infoTabDefault, date: day.toLocaleDateString("en-CA") }));
  };
  return (
    <div key={day.toDateString()} {...stylex.props(layout.d("flex"), layout.dir("column"), day.toDateString() === new Date().toDateString() && background.color(colors.highlightBg))}>
      <div {...stylex.props(effect.shadow(1), spacing.p(1), sizing.h(6))}>
        <div {...stylex.props(fontSize.sm, textAlign.align("center"))}>{weekdays[day.getDay()]}</div>
        <div {...stylex.props(fontSize.x2l, textAlign.align("center"), fontWeights.bolder)}>{day.getDate()}</div>
      </div>
      <div {...stylex.props(layout.grow(1), effect.shadow(1))} onClick={addExercise}></div>
    </div>
  );
};
