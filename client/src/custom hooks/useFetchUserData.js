import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../features/user/userSlice";

function useFetchUserData(username) {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    dispatch(getUserData(username));
  });

  return isOnline;
}

export default useFetchUserData;
