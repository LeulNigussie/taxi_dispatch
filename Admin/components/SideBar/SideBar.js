import styles from "./SideBar.module.css";
import NavButton from "../elements/NavButton/index";
import { sidebarButtonLists } from "../Data/data";
import { useState, useEffect } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = (props) => {
  const router = useRouter();
  const pathName = router.pathname;

  const registerDriver = sidebarButtonLists.find((ele) => ele.id === 20);
  const registerDispatcher = sidebarButtonLists.find((ele) => ele.id === 21);

  const removeDriver = sidebarButtonLists.find((ele) => ele.id === 10);
  const removeDispatcher = sidebarButtonLists.find((ele) => ele.id === 11);

  const initial_state = sidebarButtonLists;

  const [buttonLists, setButtonLists] = useState(initial_state);

  // const [registerArrow, changeRegisterArow] = useState(true);
  // const [removeArrow, changeRemoveArow] = useState(true);

  let links = "";
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.MenuLinks}>
        {buttonLists.map((buttons) => {
          if (props.actives === buttons.name) {
            links = "activeLink";
          } else {
            links = "navLink";
          }

          return (
            <Link href={buttons.pathname}>
              <li key={buttons.id} className={styles[links]}>
                <NavButton
                  id={buttons.id}
                  NavButtons={buttons}
                  type={buttons.name}
                  icons={buttons.Icon}
                />
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
