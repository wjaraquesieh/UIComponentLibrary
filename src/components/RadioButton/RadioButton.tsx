import React, { useState } from 'react'
import styled from 'styled-components'
import { RadioButtonProps } from './RadioButton.types'

const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.disabled ? 'grey' : 'black')};
`

const StyledInput = styled.input`
  margin-right: 8px;
`

const RadioButton: React.FC<RadioButtonProps> = ({
  disabled,
  label,
  checked,
  name,
  value,
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  return (
    <StyledLabel disabled={disabled}>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
      />
      {label}
    </StyledLabel>
  )
}

export default RadioButton
