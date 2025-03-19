function Card({ name, jobTitle, picture }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span>{name}</span>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{jobTitle}</span>
    </div>
  )
}

export default Card
