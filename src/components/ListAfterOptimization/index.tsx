import React, { useState, useMemo, useCallback } from "react";
import { IItem } from "../ListBeforOptimization/types";

const expensiveCalculation = (num: number) => {
  console.log("Expensive calculation...");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

const ListItem = React.memo(
  ({ item, onClick }: { item: IItem; onClick: (item: IItem) => void }) => {
    const calculatedValue = useMemo(
      () => expensiveCalculation(item.value),
      [item.value]
    );

    return (
      <div onClick={() => onClick(item)}>
        <p>{item.name}</p>
        <p>Value: {calculatedValue}</p>
      </div>
    );
  }
);

const ListAfterOptimization = ({ items }: { items: IItem[] }) => {
  const [selectedItem, setSelectedItem] = useState<IItem | null>(null);

  const handleClick = useCallback((item: IItem) => {
    setSelectedItem(item);
  }, []);

  return (
    <div>
      {items.map((item) => (
        <ListItem key={item.id} item={item} onClick={handleClick} />
      ))}
      {selectedItem && <p>Selected Item: {selectedItem.name}</p>}
    </div>
  );
};

export default ListAfterOptimization;
