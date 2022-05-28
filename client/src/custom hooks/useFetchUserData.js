import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function useFetchUserData(friendID) {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    dispatch(getAllTweets(userData));
  });

  return isOnline;
}
