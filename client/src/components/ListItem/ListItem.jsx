import './ListItem.scss';
import { Link } from 'react-router-dom';

const ListItem = ({ item, selected, setSelected }) => {
  if (selected === item.id ) {
    console.log(item.name)
  }
  return (
    <Link to={item?.href} className='listItemContainer'>
      <li onClick={() => setSelected(item.id)} className={selected ? "listItem selected" : "listItem"}>{item.name}</li>
    </Link>
  )
}

export default ListItem