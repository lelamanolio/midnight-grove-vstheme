import React from "react";

type Props = { count?: number };

export const Counter: React.FC<Props> = ({ count = 0 }) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicked", e.currentTarget.dataset.id);
  };

  return (
    <button data-id={count} onClick={onClick}>
      Count: {count}
    </button>
  );
};
