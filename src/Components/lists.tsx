import React from "react";
import SingleList from "./List";

const List = () => {
  const items: string[] = ["Mamun", "Ahmed"];

  const onClick = (text: string): void => alert(text);

  return (
    <div>
      <SingleList items={items} onClick={onClick} />
    </div>
  );
};

export default List;
