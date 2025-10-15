import image 
const Card = ({image , title , rate , price}) => {
  return (
    <div>
          <image source>
          <p>{title}</p>
          <p>{rate}</p>
          <p>${price}</p>
          <button>ver detalhes</button>
        </div>
  )
}

export default Card