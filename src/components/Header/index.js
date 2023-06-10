// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <div className="headerContainer">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          className="button"
          type="button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="icon" />
        </button>
      }
      overlayStyle={overlayStyles}
    >
      {close => (
        <>
          <div className="popupContainer">
            <button
              type="button"
              className="button1"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="closeIcon" />
            </button>
            <ul>
              <Link to="/" onClick={() => close()}>
                <li className="HomeCard">
                  <AiFillHome className="homeIcon" />
                  <h1 className="name">Home</h1>
                </li>
              </Link>
              <Link to="/about" onClick={() => close()}>
                <li className="aboutCard">
                  <BsInfoCircleFill className="aboutIcon" />
                  <h1 className="name">About</h1>
                </li>
              </Link>
            </ul>
          </div>
        </>
      )}
    </Popup>
  </div>
)

export default Header
