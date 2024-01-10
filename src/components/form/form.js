'use client'
import styles from './form.module.sass'
import { useForm } from "react-hook-form"

export default function Form() {

const {register, handleSubmit, formState: { errors }} = useForm()
const onSubmit = data => console.log(data)

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.caractere} >
          <div className={styles.form_group}>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Votre Prénom"
              {...register("firstname")}
              />
          </div>
          <div className={styles.form_group}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Votre Nom"
              {...register("name")}
              />
          </div>
        </div>
        <div className={styles.form_group}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Votre E-mail"
            {...register("e-mail")}
            />
        </div>
        <div className={styles.form_group}>
          <textarea
            name="message"
            id="message"
            placeholder="Votre message"
            {...register("message")}>
          </textarea>
        </div>
        <button type="submit">Envoyer le message</button>
      </form>
  )
}
