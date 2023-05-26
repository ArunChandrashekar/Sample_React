function ListGroup() {
  let items = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai"];
  //items = [];
  return (
    <>
      <h1>Dynamic List</h1>
      {items.length === 0 && <p>No Items is found in the list</p>}
      <ul className="list-group">
        {items.map((x) => (
          <li
            className="list-group-item"
            key={x}
            onClick={() => console.log(x)}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
