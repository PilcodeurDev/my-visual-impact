import BlockDecoration from "@/components/block-decoration/block-decoration"
import styles from './about.module.sass'

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
    value: "Frontière Franco-Suisse",
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
    value: "What's App",

    // (
      // <a
      //   href="https://wa.me/33614421780"
      //   rel="noreferrer"
      //   // target="_blank"
      //   className="text-[#3DE05B] text-2xl relative -top-1"
      // >
      //   <FaWhatsappSquare />
      // </a>
    // ),
  },
  {
    id: 10,
    title: "Langue :",
    value: "Français, Anglais",
  },
];

const About = () => {
  return (
    <div>
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
          <div className="col_6">
            <h3>informations personnelles</h3>
            <div className={styles.boardInfo}>
              {myInformations.map((info) => (
                <div key={info.id} className={styles.colInfo}>
                  <span>{info.title}</span>
                  <span>{info.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col_5">
            <h3>skills</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
