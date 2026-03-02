import React, { useMemo } from "react";

export function Demo({ title = "Midnight Grove" }) {
  const items = useMemo(() => ["a", "b", "c"], []);

  return (
    <section className="card" data-test-id="demo">
      <h2>{title}</h2>
      {items.map((x) => (
        <button key={x} onClick={() => console.log(x)}>
          {x.toUpperCase()}
        </button>
      ))}
    </section>
  );
}
