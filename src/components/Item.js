export default function Item(props) {
  const item = props.name;

  function handleDelete() {
    props.remove(item);
  }

  function handleStatusChange() {
    props.togglePlayed(item);
  }

  return (
    <li className="item">
      <div className="item-details">
        <p>
          <span>
            <input
              type="checkbox"
              onChange={handleStatusChange}
              value={item.played}
            />
            {item.played === true ? <del>{item.item}</del> : item.item}
          </span>
        </p>
      </div>
      <div onClick={handleDelete}>
        <button className="remove">Remove</button>
      </div>
    </li>
  );
}
