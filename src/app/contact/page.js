/**
 * The external imports
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
/**
 * The internal imports
 */
import BlockDecoration from "@/components/block-decoration/block-decoration"
import styles from './contact.module.sass'
import Form from "@/components/form/form";

const Contact = () => {

  const data = [
    {
      id: 1,
      info: "Adresse Postal",
      value: "Pontarlier, France",
      icon: faMap
    },
    {
      id: 2,
      info: "E-Mail",
      value: "simondprs62790@gmail.com",
      icon: faEnvelope,
    },
    {
      id: 3,
      info: "Téléphone",
      value: "+33 6 14 42 17 80",
      icon: faPhone,
    },
  ]

  return (
    <>
      <BlockDecoration />
      <div className="container">
        <header className={styles.title}>
          <h1>
            <span>Prendre</span>
            <span>Contact</span>
          </h1>
          <span className={styles.shadowTitle}>CONTACT</span>
        </header>
        <div className={styles.rowCenter} >
          <div className={`${styles.topUp} col_2`}>
            <div>
              <h4>Ne soyez pas timide !</h4>
              <p>N'hésitez pas à me contacter. Je suis toujours ouvert pour discuter de vos projets, idées créatives, maquettes de site ou pour des projets de plus ample envergure.</p>
            </div>
            <div>
            {data.map(({ id, info, value, icon }) => (
              <div key={id} className={styles.informations}>
                <FontAwesomeIcon icon={icon} className={styles.icon}/>
                <div className={styles.text}>
                  <span className={styles.info}>{info}</span>
                  <p>{value}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
          <div className={`${styles.topUp} col_5`}>
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact
