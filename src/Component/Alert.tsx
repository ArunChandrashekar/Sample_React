interface Props {
  message: string;
}

const Alert = (props: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {props.message}
    </div>
  );
};

export default Alert;
