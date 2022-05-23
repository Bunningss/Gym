import './Navbar.scss';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import { navList } from '../../staticData';
import { useState } from 'react';
import UserIcon from '../UserIcon/UserIcon';
import Hamburger from '../Hamburger/Hamburger';

const Navbar = ( { active, setActive } ) => {
  const [ selected, setSelected ] = useState(1);
  return (
    <div className='navbar'>
      <Link to='/' className='logoContainer'>
        <h2 className="logo">fitness club</h2>
      </Link>
      <ul className="navList">
        {
          navList.map((item) => (
            <ListItem key={item.id} item={item} selected={selected === item.id} setSelected={setSelected}/>
          ))
        }
      </ul>
      <div className="navRight">
        <UserIcon/>
        <Hamburger active={active} setActive={setActive}/>
      </div>
    </div>
  )
}

export default Navbar