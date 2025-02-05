
import './App.css'
import RefForm from './components/RefForm/RefForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  return (
    <>
      <SimpleForm></SimpleForm>
      <hr />
      <StatefulForm></StatefulForm>
      <hr />
      <RefForm></RefForm>
    </>
  )
}

export default App
