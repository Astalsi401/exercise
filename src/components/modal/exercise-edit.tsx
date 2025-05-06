import * as stylex from "@stylexjs/stylex";
import { useSelector } from "react-redux";
import { Input } from "@/components/ui/custom-input";
import { backFilter, background, colors, effect, layout, sizing, spacing } from "@/assets/styles/index.stylex";
import type { State } from "@/types";
import { modal } from "./styles";

type ExerciseEditProps = { tabRef: React.RefObject<HTMLDivElement | null> };
export const ExerciseEdit: React.FC<ExerciseEditProps> = ({ tabRef }) => {
  const active = useSelector((state: State) => state.infoTabActive);
  const { name, date, reps, sets, weight } = useSelector((state: State) => state.infoTab);
  return (
    <div ref={tabRef} {...stylex.props(spacing.p(2), layout.pos("absolute"), layout.d("none"), active && layout.d("block"), background.color(colors.highlightBg), effect.shadow(5), backFilter.blur(5), modal.position, sizing.wCustom("min(100%, 448px)"))}>
      <Input name="name" type="text" value={name} placeholder="新增項目" />
      <Input name="date" type="date" value={date} />
      <Input name="reps" type="number" step={1} value={reps} />
      <Input name="sets" type="number" step={1} value={sets} />
      <Input name="weight" type="number" step={1} value={weight} />
    </div>
  );
};
