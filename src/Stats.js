export default function Stats({ items }) {
    if (!items.length)
      return (
        <p className="stats">
          <em>Start Adding some items for your next journey</em>
        </p>
      );
  
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything & ready to go"
            : `you have ${numItems} items on your list and tou aready packed ${numPacked}
          (${percentage}%)`}
        </em>
      </footer>
    );
  }
  