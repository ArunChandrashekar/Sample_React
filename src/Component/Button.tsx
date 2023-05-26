import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button = (props: Props) => {
  return (
    <button
      type="button"
      className="btn btn-primary"
      id="liveAlertBtn"
      onClick={() => console.log("button is clicked")}
    >
      {props.children}
    </button>
  );
};

export default Button;
