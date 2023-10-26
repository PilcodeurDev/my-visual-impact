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
              <font className="main-color">je m'appelle</font>
              <font className="main-color">simon despres .</font>
              <font>concepteur de</font>
              <font>sites web</font>
            </h1>
            <p>
              Je suis concepteur Web ainsi que développeur front-end basé à la
              frontière Franco-Suisse. Je suis passioné par la création
              d'interface utilisateur intéractive et dynamique qui captivera
              vos visiteurs dès les premières secondes.
            </p>
            <div>
              <Button href="/" icon={IconTypes.ARROW_RIGHT}>
                À propos de moi
              </Button>
            </div>
          </div>
          {/* navbar */}
          <div>superbe navbar</div>
        </div>
      </div>
    </div>
  )
}
