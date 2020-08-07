import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestItems, receiveItems, receiveItemsError } from "../actions";

// Template, not an actual component
// Allows to get a list of all the items in the store from the backend
// Feel free to use it to fetch data from the backend
// returns a list of the name of all the items

const FetchItems = () => {
  const dispatch = useDispatch();
  const { status, items } = useSelector((state) => state.items);

  React.useEffect(() => {
    dispatch(requestItems());
    fetch("/items")
      .then((res) =>
        res.json().then((data) => {
          dispatch(receiveItems(data));
        })
      )
      .catch((err) => dispatch(receiveItemsError()));
  }, []);

  return <>{items ? items.map((item) => <p>{item.name}</p>) : status}</>;
};

export default FetchItems;
