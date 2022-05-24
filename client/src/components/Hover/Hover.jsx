import './Hover.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

const Hover = () => {
  return (
    <div className='hover'>
        <PrimaryButton text={"sign up"}/>
        <SecondaryButton text={"sign in"}/>
    </div>
  )
}

export default Hover