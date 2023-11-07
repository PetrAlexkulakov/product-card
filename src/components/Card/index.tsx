import Tags from '../Tags'
import styles from './styles.module.scss'
import placeholder from '../../assets/placeholder.png';

const Card = ({img = placeholder, title, text, ammount, tags, place}:
  {
    img?: string,
    title: string,
    text: string,
    ammount: string,
    tags: string[],
    place: string
  }) => {
  return (
    <div className={styles.card + ' d-flex'}>
      <img src={img} alt="" />
      <div>
        <div>{title}</div>
        <p>{text}</p>
        <span>{ammount}</span>
        {tags && tags.map((t, index) =>
          <Tags key={index} tag={t} />
        )}
        <span>{place}</span>
      </div>
    </div>
  )
}

export default Card
