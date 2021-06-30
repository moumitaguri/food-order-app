import Input from '../Utils/Input';
const MenuItemForm = (props) => {
  return (
    <form>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '4',
          step: '1',
          defaultValue: 1,
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MenuItemForm;
