import { IForm, Form } from './components/Form/Form';
import './App.css';
import { ClockItems } from './components/Clock/ClockItems';
import { useState } from 'react';

function App() {
  const [watches, setWatches]=useState<IForm[]>([])

  const remove = (el: IForm) => {
    const removed = watches.filter((item) => item.id !== el.id)
    setWatches(removed);
  }

  const onAdd = (newWatch: IForm) => {
    setWatches([...watches, newWatch]);
  }
  return (
    <> 
      <Form onAdd={onAdd} />
      <ClockItems items={watches} remove={remove} />
    </>
  )
}

export default App
