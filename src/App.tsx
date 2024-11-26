import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Table, {
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
} from './components/Table'
import RadioButton from './components/RadioButton'
import Label from './components/Label'
import Dropdown from './components/Dropdown'

function App() {
  const [option, setOptions] = useState<any>([])

  useEffect(() => {
    let list: any = []
    for (let i = 0; i < 5; i++) {
      list.push({ label: 'option' + i, value: i, disabled: false })
    }
    setOptions(list)
  }, []) // Agregado array de dependencias vacío

  return (
    <div className="App">
      <h1>UI Component Library</h1>

      <h2>Button Component</h2>
      <Button
        children={'This is a Button'}
        disabled={false}
        onClick={() => alert('Primary Button Clicked')}
      />
      <Button
        children={'This is a Button'}
        disabled={true}
        onClick={() => alert('Secondary Button Clicked')}
      />

      <h2>Radio Button</h2>
      <Label htmlFor="rbOption" children={'Select an Option'} />
      <RadioButton label="Option 1" checked={false} name="rbOption" value="1" />
      <RadioButton label="Option 2" checked={true} name="rbOption" value="2" />

      <h2>Dropdown</h2>
      <Dropdown disabled={true} options={option} />
      <Dropdown disabled={false} options={option} />
    </div>
  )
}

export default App
