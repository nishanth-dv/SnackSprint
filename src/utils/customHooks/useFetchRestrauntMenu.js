import { useState, useEffect } from "react";
import { MENU_URL } from "../constants";

const useFetchRestrauntMenu = (resId) => {
  const [restrauntMenu, setRestrauntMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(`${MENU_URL}${resId}`);
    const menuItems = await response.json();
    setRestrauntMenu(menuItems);
  };

  return restrauntMenu;
};

export default useFetchRestrauntMenu;
