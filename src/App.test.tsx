import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders UI Component Library heading', () => {
  render(<App />)
  const headingElement = screen.getByText(/UI Component Library/i)
  expect(headingElement).toBeInTheDocument()
})

test('renders Button Component heading and buttons', () => {
  render(<App />)

  // Verifica el encabezado del componente Button
  const buttonHeading = screen.getByText(/Button Component/i)
  expect(buttonHeading).toBeInTheDocument()

  // Verifica los botones renderizados
  const buttons = screen.getAllByRole('button')
  expect(buttons).toHaveLength(2)

  expect(buttons[0]).toHaveTextContent('This is a Button')
  expect(buttons[1]).toHaveTextContent('This is a Button')
})

test('renders Radio Button component', () => {
  render(<App />)

  // Verifica el encabezado del componente Radio Button
  const radioHeading = screen.getByText(/Radio Button/i)
  expect(radioHeading).toBeInTheDocument()

  // Verifica los radio buttons renderizados
  const radioButtons = screen.getAllByRole('radio')
  expect(radioButtons).toHaveLength(2)
})

test('renders Dropdown component', () => {
  render(<App />)

  // Verifica el encabezado del componente Dropdown
  const dropdownHeading = screen.getByText(/Dropdown/i)
  expect(dropdownHeading).toBeInTheDocument()

  // Verifica que los selectores estén presentes
  const dropdowns = screen.getAllByRole('combobox')
  expect(dropdowns).toHaveLength(2)
})
