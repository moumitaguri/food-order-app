import MenuItem from './MenuItem';

const dummyMenu = [
  { id: 1, title: 'menu1', description: 'desc1', price: 'Rs. 100' },
  { id: 2, title: 'menu2', description: 'desc2', price: 'Rs. 200' },
  { id: 3, title: 'menu3', description: 'desc3', price: 'Rs. 300' },
];

const AvailableMenu = (props) => {
  const availableList = dummyMenu.map((item) => {
    return <MenuItem key={item.id} item={item} />;
  });
  return (
    <section>
      <h2>Here are available menu for today!</h2>
      <ul>{availableList}</ul>
    </section>
  );
};

export default AvailableMenu;
