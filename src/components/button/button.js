/**
 * The external imports
 */
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faDownload, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

/**
 * The internal imports
 */
import styles from './button.module.sass'
import cv2023 from "../../../public/Simon_Despres.pdf"

export const IconTypes = {
  ARROW_RIGHT: "ARROW_RIGHT",
  DOWNLOAD: "DOWNLOAD",
  SEND: "SEND",
}

const Button = ({ href, icon, children}) => {

  const isDownload = icon === IconTypes.DOWNLOAD;
  const isSend = icon === IconTypes.SEND;

  if (isDownload) {
    return (
      <a href={href} className={styles.button} rel="download" download={cv2023}>
        {/* href={cv2023} className={styles.button} download="Simon_Despres.pdf" rel="download"*/}
        {children}
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faDownload} width={20} height={20} />
        </span>
      </a>
    );
  }
  else if (isSend) {
    return (
      <button type="submit" id={styles.send} className={styles.button}>
        {children}
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faPaperPlane} width={30} height={30} />
        </span>
      </button>
    );
  }
  return (
      <Link href={href} className={styles.button}>
        {children}
        <span className={styles.icon}>
          <Button.Icon iconType={icon} />
        </span>
      </Link>
  )
}

Button.Icon = ({ iconType }) => {
  if (iconType === "ARROW_RIGHT"){
    return <FontAwesomeIcon icon={faArrowRight} width={20} height={20}/>
  }
}

Button.Icon.displayName = 'Button.Icon';

export default Button
