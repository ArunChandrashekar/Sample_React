interface Props {
  text: string;
}
function Message(props: Props) {
  return <h1>{props.text}</h1>;
}
export default Message;
