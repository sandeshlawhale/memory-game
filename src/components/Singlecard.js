import './Singlecard.css'

export default function Singlecard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

  return (
    <div className='card'>
        <div className={flipped ? "flip" : ""}>
            <img className='frontcover' src={card.src} alt='cover front'/>
            <img 
                className='backcover' 
                src="./img/cover.png" 
                onClick={handleClick}
                alt='cover back'
            />
        </div>
    </div>
  )
}
