import Item from './Item'

const FoodItems = ({items}) => {
//let food=["Dal","b", "c", "d", "e"]
//let food=[];
return (
<ul className="list-group">
{items.map((item) => (
  <Item key={item} foodItem={item}></Item> ))}
</ul>
);
};
export default FoodItems;