import { Profiler, useState } from "react";
import { IItem } from "./types";

const expensiveCalculation = (num: number) => {
  console.log("Expensive calculation...");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

const ListItem = ({
  item,
  onClick,
}: {
  item: IItem;
  onClick: (item: IItem) => void;
}) => {
  return (
    <div onClick={() => onClick(item)}>
      <p>{item.name}</p>
      <p>Value: {expensiveCalculation(item.value)}</p>
    </div>
  );
};

const ListBeforeOptimization = ({ items }: { items: IItem[] }) => {
  const [selectedItem, setSelectedItem] = useState<IItem | null>(null);

  const handleClick = (item: IItem) => {
    setSelectedItem(item);
  };

  return (
    <div>
      {items.map((item) => (
        <ListItem key={item.id} item={item} onClick={handleClick} />
      ))}
      {selectedItem && <p>Selected Item: {selectedItem.name}</p>}
    </div>
  );
};

export default ListBeforeOptimization;
