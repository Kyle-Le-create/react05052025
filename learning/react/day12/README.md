# Interactivity

## Event Handling

### event handlers

they are functions, do not invoke them
Don’t do: onClick = {handleClick()}

```jsx
//Function component button event handler
export default function FunctionClick() {
    const handleClick = () => {
        console.log('Button Clicked')
    }
    return <>
    <button onClick={handleClick}>Function Click</button>
    </>
}


//Class component button
export default class ClassClick extends Component {
    handleClick() {
        console.log('Class Click Button')
    }
    render() {
        return <div>
            <button onClick={this.handleClick}>Class Click</button>
        </div>
    }
}
```

## Examples of controlled components

```jsx
// Input (text)
const [name, setName] = useState("");
<input value={name} onChange={(e) => setName(e.target.value)} />;

// Checkbox
const [checked, setChecked] = useState(false);
<input
  type="checkbox"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>;

// Select
const [option, setOption] = useState("apple");
<select value={option} onChange={(e) => setOption(e.target.value)}>
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
</select>;
```

## Form

```jsx
export default function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button type="submit">Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
}
```

## Updating States

### Updating objects in state

```jsx
export default function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  const handleYearChange = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }));
  };

  const handleMakeChange = (e) => {
    setCar((c) => ({ ...c, make: e.target.value }));
  };

  const handleModelChange = (e) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>

      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}
```

### Updating arrays in state

```jsx
export function ArrayComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  };

  const handleRemoveFood = (index) => {
    setFoods(foods.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}
```

### Updating an array of object

```jsx
export function ArrayObj() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const handleRemoveCar = (index) => {
    setCars((cars) => cars.filter((_, i) => i !== index));
  };
  const handleYearChange = (event) => {
    setCarYear(event.target.value);
  };
  const handleMakeChange = (event) => {
    setCarMake(event.target.value);
  };
  const handleModelChange = (event) => {
    setCarModel(event.target.value);
  };

  return (
    <div>
      <h2>List of Car Object</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}
```
