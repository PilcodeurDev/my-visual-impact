import styles from './form.module.sass'

export default function Form() {
  return (
      <form>
        <div className={styles.caractere} >
          <div className={styles.form_group}>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Votre Prénom"
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Votre Nom"
            />
          </div>
        </div>
        <div className={styles.form_group}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Votre e-mail"
          />
        </div>
        <div className={styles.form_group}>
          <textarea
            name="message"
            id="message"
            placeholder="Votre message">
          </textarea>
        </div>
        <button type="submit">Envoyer le message</button>
      </form>
  )
}
