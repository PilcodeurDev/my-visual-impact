/**
 * The external imports
 */
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons'

/**
 * The internal imports
 */
import styles from './button.module.sass'
import cv2023 from "../../../public/Simon_Despres.pdf"

export const IconTypes = {
  ARROW_RIGHT: "ARROW_RIGHT",
  DOWNLOAD: "DOWNLOAD"
}

const Button = ({ href, icon, children}) => {

  const isDownload = icon === IconTypes.DOWNLOAD;

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


// type GetParams = {
//   params: {
//     filename: string;
//   };
// };

// // export an async GET function. This is a convention in NextJS
// export async function GET(req: Request, { params }: GetParams) {
//   // filename for the file that the user is trying to download
//   const filename = params.filename;

//   // external file URL
//   const DUMMY_URL =
//     "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

//   // use fetch to get a response
//   const response = await fetch(DUMMY_URL);

//   // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
//   return new Response(response.body, {
//     headers: {
//       ...response.headers, // copy the previous headers
//       "content-disposition": `attachment; filename="${filename}"`,
//     },
//   });
// }
