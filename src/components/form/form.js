'use client'
import styles from './form.module.sass'
import { useForm } from "react-hook-form"
import Button, { IconTypes } from "@/components/button/button";

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
              {...register("firstname", {required: true})}
              aria-invalid={errors.firstname ? "true" : "false"}
            />
            {errors.firstname && errors.firstname.type === "required" && (
              <span role="alert">Le prénom est requis</span>
            )}
          </div>
          <div className={styles.form_group}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Votre Nom"
              {...register("name", {required: true})}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && errors.name.type === "required" && (
              <span role="alert">Le nom est requis</span>
            )}
          </div>
        </div>
        <div className={styles.form_group}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Votre E-mail"
            {...register("email", {required: true})}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && errors.email.type === "required" && (
            <span role="alert">L'email est requis</span>
          )}
        </div>
        <div className={styles.form_group}>
          <textarea
            name="message"
            id="message"
            placeholder="Votre message"
            {...register("message", {required: true})}
            aria-invalid={errors.message ? "true" : "false"}>
          </textarea>
          {errors.message && errors.message.type === "required" && (
            <span role="alert">Un message est requis</span>
          )}
        </div>
        <div>
          {/* au click => pop-up de remerciement pour le message */}
          {/* au click => envoi de mail/message par mail ou what's app */}
          <Button icon={IconTypes.SEND} href="#" >
            Envoyer le message
          </Button>
        </div>
      </form>
  )
}
