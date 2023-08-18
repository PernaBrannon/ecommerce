import ToDo from './components/ToDo'


function App() {
  return (
      <div>
          <h1>My To do's</h1>
          <ToDo text='Taco' />
          <ToDo text='Burger' />
          <ToDo text='Cake' />
      </div>
  );
}

export default App;
