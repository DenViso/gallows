


const PlayZone = ({currentWord, choosenLeters, count, letterStyling,btnStyling,alphabet,manChangeStyling} ) => {
  return (
    <div className="wrapper">
        <div className="word-section">
          {currentWord.map((letter) => {
            return <h2 key={letter} className={letterStyling(letter)} >{letter}</h2>
          })}
        </div>
        <div className="letter-section">
          {alphabet.map((l) => {
            return <button key={l} onClick={() => choosenLeters(l)} className={btnStyling(l)}>{l}</button>
          })}
        </div>
        <div className="count-section ">
          <h3 className="count">You have wrong letters {count}/9 </h3>
        </div>
        <div className="pic">
        <div className="pic-main">
          <img src={manChangeStyling()} alt="" className="man" />
        </div>
      </div>
   </div>
  )
}

export default PlayZone