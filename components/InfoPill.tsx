const InfoPill = ({text, image}: InfoPillProps) => {
  return (
    <figure className="info-pill">
      <img src={image} alt={text} className="size-5"/>
      <figcaption className="text-sm font-medium">{text}</figcaption>
    </figure>
  )
}
export default InfoPill
