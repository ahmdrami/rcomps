import React, { FunctionComponent } from 'react'
import { Button } from 'theme-ui'
type StyledButtonProps = {
  onClick?: any
  variant: 'secondary' | 'primary'
}
/**
- An example button
**/
const StyledButton: FunctionComponent<StyledButtonProps> = ({
  variant,
  children,
}) => {
  return (
    <>
      <Button variant={variant}> {children}</Button>
    </>
  )
}

export default StyledButton
