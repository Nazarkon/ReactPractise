export default function CoreConcept(props) {
  const { image, title, description } = props
  return (
    <li>
      <img src={image} alt={title}/>
      <h3>{props.title}</h3>
      <p>{description}</p>
    </li>
  )
}