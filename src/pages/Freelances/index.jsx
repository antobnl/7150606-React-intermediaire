import DefaultPicture from '../../assets/logo192.png'
import Card from '../Card/'
function Freelances() {
  const freelanceProfiles = [
    {
      name: 'Jane Doe',
      jobTitle: 'Devops',
      picture: DefaultPicture,
    },
    {
      name: 'John Doe',
      jobTitle: 'Developpeur frontend',
      picture: DefaultPicture,
    },
    {
      name: 'Jeanne Biche',
      jobTitle: 'Développeuse Fullstack',
      picture: DefaultPicture,
    },
  ]

  return (
    <div>
      <h1>Freelances 👩·💻👨·💻👩·💻</h1>
      {freelanceProfiles.map(({ name, jobTitle, picture }, index) => (
        <div key={index}>
          <Card name={name} jobTitle={jobTitle} picture={picture} />
        </div>
      ))}
    </div>
  )
}

export default Freelances
