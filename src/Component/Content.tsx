function Content() {
  const name = "Arun";
  if (name) return <p>Hello {name}!</p>;
  return <p>Hello World!</p>;
}
export default Content;