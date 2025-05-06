import * as stylex from "@stylexjs/stylex";
import { useDispatch } from "react-redux";
import { updateInfoTab } from "@/store";
import { border, fontSize, layout, sizing, spacing } from "@/assets/styles/index.stylex";

export const Input: React.FC<{ name: string; type: string; step?: number; value: string | number; placeholder?: string }> = (props) => {
  const dispatch = useDispatch();
  const hasLabel = ["name", "date"];
  const handleChange = ({ target: { name: n, value } }: React.ChangeEvent<HTMLInputElement>) => dispatch(updateInfoTab({ [n]: hasLabel.includes(n) ? value : parseInt(value) }));
  return (
    <label {...stylex.props(layout.d("flex"), spacing.mt(1))}>
      {!hasLabel.includes(props.name) && <div {...stylex.props(layout.d("flex"), layout.alignItems("center"), layout.shrink(0), sizing.w(6), fontSize.sm)}>{props.name}</div>}
      <input {...props} onChange={handleChange} {...stylex.props(layout.d("block"), layout.grow(1), spacing.p(1), sizing.wp(100), border.style("none"))} />
    </label>
  );
};
