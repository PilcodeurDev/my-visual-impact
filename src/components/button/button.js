import Link from 'next/link'
import styles from './button.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons'

export const IconTypes = {
  ARROW_RIGHT: "ARROW_RIGHT",
  DOWNLOAD: "DOWNLOAD"
}

const Button = ({ href, icon, children}) => {
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
  else if (iconType === "DOWNLOAD"){
    return <FontAwesomeIcon icon={faDownload} width={20} height={20}/>
  }
}

Button.Icon.displayName = 'Button.Icon';

export default Button
