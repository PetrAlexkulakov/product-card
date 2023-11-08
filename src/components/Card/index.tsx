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
      <img src={img} />
      <div className={styles.cardContent}>
        <div>
          <h4>{title}</h4>
          <div className={styles.cardContentText + ' d-flex justify-content-between'}>
            <p>{text}</p>
            <span className={styles.cardContentAmmount}>${ammount}</span>
          </div>
          <div className={styles.cardContentTags + ' d-flex'}>
            {tags && tags.map((t, index) =>
              <div className={styles.cardContentTags + ' d-flex'} key={index}>
                <Tags tag={t} />
                {index !== tags.length - 1 &&
                  <span className={styles.tagsDot}>•</span>
                }
              </div>
            )}
          </div>
        </div>
        <div className='d-flex'>
          <div className={styles.locationIcon} />
          <span className='ps-2'>{place}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
