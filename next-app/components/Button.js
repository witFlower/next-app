import utilStyles from "../styles/utility.module";
import cn from "classnames";

const Button = ({ text }) => {
  return (
    <button
      className={cn({
        [utilStyles.isSuccess]: type === "success",
        [utilStyles.isError]: type === "error",
      })}
    >
      {text}
    </button>
  );
};

export default Button;
