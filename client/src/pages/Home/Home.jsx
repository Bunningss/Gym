import './Home.scss';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton';

const Home = () => {
  return (
    <div className="home">
      <h1 className="headerText"></h1>
      <p className="homeDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae, asperiores autem velit amet dolor sint ab voluptates temporibus aut perferendis quas aperiam consequatur odio, quisquam eos vitae blanditiis vero, dolores nihil commodi explicabo voluptate natus. Ab tenetur, magni ipsum eaque sed est nemo odit officiis rem modi natus animi!
      </p>
      <div className="btnContainer">
        <SecondaryButton text={"learn more"}/>
        <PrimaryButton text={"join now"}/>
      </div>
    </div>
  )
}

export default Home