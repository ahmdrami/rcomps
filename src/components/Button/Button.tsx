import React, { FunctionComponent } from 'react'
import { Button } from 'theme-ui'

type CButtonType = {
  onClick: any
}

const CButton: FunctionComponent<CButtonType> = ({ children, ...props }) => {
  return <Button {...props}> {children}</Button>
}

export default CButton
