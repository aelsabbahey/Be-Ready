export default function Item({ item, onDeleteItem, onToggleItems }) {
    return (
      <li>
        <input
          value={item.packed}
          onChange={() => onToggleItems(item.id)}
          type="checkbox"
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)} style={{ color: "red" }}>
          X
        </button>
      </li>
    );
  }
  