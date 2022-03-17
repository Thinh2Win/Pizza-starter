import React from 'react';
import ReactDOM from 'react-dom';
import PizzaDisplay from './PizzaDisplay.jsx';
// import PizzaData from '/server/pizza.json';
  var pizzaData = [
    {
      "toppings": [
        "sausage",
        "pepperoni"
      ],
      "rank": 2,
      "orders": 10
    },
    {
      "toppings": [
        "mozzarella cheese"
      ],
      "rank": 1,
      "orders": 30
    },
    {
      "toppings": [
        "mozzarella cheese",
        "bacon",
        "beef",
        "onions",
        "pineapple"
      ],
      "rank": 3,
      "orders": 5
    },
    {
      "toppings": [
        "pineapple",
        "ham"
      ],
      "rank": 4,
      "orders": 2
    }
  ]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: pizzaData,
    }
    this.filterIngredients = this.filterIngredients.bind(this);
  }

  filterIngredients(event) {
    var filteredPizzas = [];
    this.state.pizzas.forEach(pizza => {
      if (pizza.toppings.includes(event.target.value)) {
        filteredPizzas.push(pizza);
      }
    });
    console.log(filteredPizzas)
    // this.setState({pizzas: filteredPizzas})
  }

  render() {
    return (
      <div>
        <h1>Pizza Tracker</h1>
        <Form filterIngredients={this.filterIngredients}/>
        <PizzaDisplay pizzas={this.state.pizzas}/>
      </div>
    )
  }
}

var Form = ({filterIngredients}) => (
  <form>
    <input type="text" placeholder="Ingredients"
      onChange={() => {filterIngredients(event)}}>
    </input>
    <input type="text" placeholder="Orders"></input>
  </form>
)

ReactDOM.render(<App />, document.getElementById('app'))