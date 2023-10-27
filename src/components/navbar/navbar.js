'use client'

/**
 *  The external imports
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faBook, faEnvelope, faComment } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * The internal imports
 */
import styles from './navbar.module.sass'

const pagesArray = [
  {
    id: 1,
    path: "/",
    text: "Acceuil",
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
  const pathname = usePathname()

  return (
    <nav className={styles.navbar}>
      <ul>
        {pagesArray.map((page) => (
          <li key={page.id} className={styles.icon_box}>
            <Link href={page.path} >
              <FontAwesomeIcon icon={page.icon} className={styles.icon}/>
              <h6>{page.text}</h6>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar
