/**
 * The external imports
 */
import { FaWhatsappSquare } from "react-icons/fa";
/**
 * The internal imports
 */
import styles from './about.module.sass'
import BlockDecoration from "@/components/block-decoration/block-decoration"
import GaugeBar from "@/components/gauge-bar/gauge-bar"
import Button, { IconTypes } from "@/components/button/button";


const myInformations = [
  {
    id: 1,
    title: "Prénom :",
    value: "Simon",
  },
  {
    id: 2,
    title: "Nom de famille :",
    value: "Despres",
  },
  {
    id: 3,
    title: "Âge :",
    value: "28 ans",
  },
  {
    id: 4,
    title: "Nationalité :",
    value: "Française",
  },
  {
    id: 5,
    title: "Indépendant :",
    value: "Disponible",
  },
  {
    id: 6,
    title: "Adresse :",
    value: "France-Suisse",
  },
  {
    id: 7,
    title: "Téléphone :",
    value: "+33 6 14 42 17 80",
  },
  {
    id: 8,
    title: "Email :",
    value: "simondprs62790@gmail.com",
  },
  {
    id: 9,
    title: "What's App :",
    value: (
      <a
        href="https://wa.me/33614421780"
        rel="noreferrer"
        target="_blank"
        className={styles.iconWhatsApp}
      >
        <FaWhatsappSquare />
      </a>
    ),
  },
  {
    id: 10,
    title: "Langue :",
    value: "Français, Anglais",
  },
];

const skillData = [
  {
    name: "html",
    rate: 90
  },
  {
    name: "css",
    rate: 80
  },
  {
    name: "javascript",
    rate: 75
  },
  {
    name: "React",
    rate: 70
  },
  {
    name: "Next",
    rate: 60
  },
]

const About = () => {
  const rateSkill = 20

  return (
    <>
      {/* <BlockDecoration/> */}
      <div className="container">
        <header className={styles.title}>
          <h1>
            <span>à propos</span>
            <span>de moi</span>
          </h1>
          <span className={styles.shadowTitle}>CV</span>
        </header>
        <div className={`${styles.rowCenter} row`}>
          <div className={`${styles.topUp} col_6`}>
            <h4 className={'pb-80'} >informations personnelles</h4>
            <div className={styles.boardInfo}>
              {myInformations.map((info) => (
                <div key={info.id} className={styles.colInfo}>
                  <span>{info.title}</span>
                  <span>{info.value}</span>
                </div>
              ))}
            </div>
            {/* <Button icon={IconTypes.DOWNLOAD} href="#" >
                Télécharger le cv
            </Button> */}
          </div>
          <div className={`${styles.topUp} col_5`}>
            <h4>Mes compétences</h4>
            <div className={styles.skillPannel}>
              {skillData.map(({ id, name, rate}) => (
                <div key={id} className={styles.skillGauge}>
                  {<GaugeBar rateSkill={rate} />}
                  <div className={styles.textPannel}>
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default About
