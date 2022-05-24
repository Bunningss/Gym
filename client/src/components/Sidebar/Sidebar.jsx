import './Sidebar.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import { navList } from '../../staticData';
import ListItem from '../ListItem/ListItem';

const Sidebar = ({ active, setActive }) => {
  const handleClick = () => {
    setActive(!active)
  };
  return (
    <div className={active ? 'sidebar active' : 'sidebar'}>
        <ul className="sidebarList">
        {
            navList.map((item) => (
                <ListItem item={item} key={item.id} onclick={handleClick}/>
            ))
        }
        </ul>
        <PrimaryButton onclick={handleClick} text={"Join now"}/>
        <SecondaryButton onclick={handleClick} text={"learn more"}/>
    </div>
  )
}

export default Sidebar