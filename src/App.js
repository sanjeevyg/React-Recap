import logo from './logo.svg';
import './App.css';


function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-210616-chickpea-02-landscape-jg-1630100115.jpg" height={300} alt="Vegeterian American Food" />
      <ul style={{textAlign: "left"}}>
        {props.dishes.map(dish => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes = [
  "Maaroni and Cheese", 
  "Salmon",
  "Tofu with Vegetables"
]

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}))

  console.log(dishObjects)

function App() {
  return (
    <div className="App">
      <Header name="Sanjeev"/>
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
