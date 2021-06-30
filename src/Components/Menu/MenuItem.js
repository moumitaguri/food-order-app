import MenuItemForm from './MenuItemForm';

const MenuItem = ({ item }) => {
  return (
    <li>
      <div>
        <h3>{item.title}</h3>
        <div> {item.description}</div>
        <div> {item.price}</div>
      </div>
      <MenuItemForm id={item.id} />
    </li>
  );
};

export default MenuItem;
