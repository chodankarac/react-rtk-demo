import { ordered, restockedIceCream } from "../icecream/iceCreamSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import React from "react";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIcecream = useAppSelector((state) => state.iceCream.numOfIcecreams);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of ice creams-{numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restockedIceCream(value))}>Restock ice creams</button>
    </div>
  );
};
