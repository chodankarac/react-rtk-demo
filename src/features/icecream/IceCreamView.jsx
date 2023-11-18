import { useDispatch, useSelector } from "react-redux";
import { ordered, restockedIceCream } from "../icecream/iceCreamSlice";
import { useState } from "react";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIcecream = useSelector((state) => state.iceCream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice creams-{numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restockedIceCream(value))}>Restock ice creams</button>
    </div>
  );
};
