import Header from './Components/Header'
import Main from './Components/Main'

function App({skills}) {

  return (
    <div>
      <Header />
      <Main skills={skills}/>
    </div>
  );
}

export default App;
