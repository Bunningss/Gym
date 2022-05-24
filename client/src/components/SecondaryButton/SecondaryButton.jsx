import './SecondaryButton.scss';

const SecondaryButton = ({ text, onclick }) => {
  return (
    <button onClick={onclick} className="secondaryBtn">{text}</button>
  )
}

export default SecondaryButton