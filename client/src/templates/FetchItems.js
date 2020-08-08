import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestItems, receiveItems, receiveItemsError } from "../actions";
import {getStoreItemArray,getStoreItemArrayStatus} from '../reducers/items-reducer'

// Template, not an actual component // do not use it directly
// Allows to get a list of all the items in the store from the backend
// Feel free to use the code to fetch data from the backend
// returns a list of the name of all the items
// getStoreItemArray and getItemsStatus are helper functions to get
// the items and the status of the request to the backend (see in item-reducer.js)

const FetchItems = () => {
  const dispatch = useDispatch();
  const items = useSelector(getStoreItemArray);
  const status = useSelector(getStoreItemArrayStatus);

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

  return <div>{items ? items.map((item) => <p>{item.name}</p>) : status}</div>;
};

export default FetchItems;
