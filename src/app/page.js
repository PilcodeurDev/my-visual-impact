/* eslint-disable react/no-unescaped-entities */
import Button, { IconTypes } from '@/components/button/button'

export default function Home() {
  return (
    <div>
      <div className='block-decoration'></div>
      <div className='container'>
        <div className='row'>
          <div className='profil'></div>
          <div className='text-presentation'>
            <h1>
              <font>je m'appelle</font>
              <font>simon despres .</font>
              <font>concepteur de</font>
              <font>sites web</font>
            </h1>
            <p>
              Je suis concepteur Web ainsi que développeur front-end basé à la
              frontière Franco-Suisse. Je suis passionné par la création
              d'interface utilisateur interactive et dynamique qui captivera
              vos visiteurs dès les premières secondes.
            </p>
            <div>
              <Button href="/about" icon={IconTypes.ARROW_RIGHT}>
                À propos de moi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
