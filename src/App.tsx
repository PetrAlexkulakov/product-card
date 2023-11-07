import './App.css'
import Card from './components/Card'
import { cards } from './shared/cards'

function App() {
  return (
    <>
      {cards && cards.map((card, index) =>
        <Card
          key={index}
          title={card.title}
          text={card.text}
          ammount={card.ammount}
          tags={card.tags}
          place={card.place}
        />
      )}
    </>
  )
}

export default App
