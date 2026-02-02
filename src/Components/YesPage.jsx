import './YesPage.css'
import couple from '../assets/couple-removebg.png';

function YesPage() {

  return (
    <div className="main-container">
      <div className="hearts">
        <span>❤️</span>
        <span>❤️</span>
        <span>❤️</span>
        <span>❤️</span>
        <span>❤️</span>
        <span>❤️</span>
        <span>❤️</span>
      </div>

      <img src={couple} alt="couple" />
      <h2>Yayyy! Now this can be you and me on Valentine's Day <span>❤️</span></h2>
    </div>
  )
}

export default YesPage
