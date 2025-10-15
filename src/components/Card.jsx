const Card = ({image , title , rate , price}) => {
  return (
    <div>
        <img src={image} alt="" />
          <p>{title}</p>
          <p>{rate}</p>
          <p> $ {price}</p>
          <button>ver detalhes</button>
        </div>
  )
}

export default Card