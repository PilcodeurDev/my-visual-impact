'use client'

/**
 *  The external imports
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faBook, faEnvelope, faComment } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

/**
 * The internal imports
 */
import styles from './navbar.module.sass'

const menuIcons = [
  {
    id: 1,
    path: "/",
    text: "Accueil",
    icon: faHouse,
  },
  {
    id: 2,
    path: "/about",
    text: "A Propos",
    icon: faUser,
  },
  {
    id: 3,
    path: "/portefolio",
    text: "Portefolio",
    icon: faBook,
  },
  {
    id: 4,
    path: "/contact",
    text: "Contact",
    icon: faEnvelope,
  },
  {
    id: 5,
    path: "/blog",
    text: "Blog",
    icon: faComment,
  },
];

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <ul>
        {menuIcons.map(({id, path, icon, text}) => (
          <li key={id} className={styles.icon_box}>
            <Link href={path} >
              <FontAwesomeIcon icon={icon} className={styles.icon}/>
              <h6>{text}</h6>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar
