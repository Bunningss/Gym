import './PrimaryButton.scss';

const PrimaryButton = ({ text, onclick }) => {
  return (
    <button onClick={onclick} className="primaryBtn">{text}</button>
  )
}

export default PrimaryButton