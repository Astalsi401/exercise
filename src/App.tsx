import * as stylex from "@stylexjs/stylex";
import { Calendar } from "@/components/calendar";
import { colors } from "@/assets/styles/index.stylex";
import "@/assets/styles/main.scss";

const styles = stylex.create({
  root: {
    backgroundColor: colors.mainBg,
    color: colors.mainText,
    minHeight: "100vh",
  },
});

export const App = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <Calendar />
    </div>
  );
};
