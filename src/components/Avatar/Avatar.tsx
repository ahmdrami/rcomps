
import React, { FunctionComponent } from 'react'
import { AvatarProps } from './Avatar.model'

/**
- Avatar component
**/
const Avatar: FunctionComponent<AvatarProps> = ({
  children,
}) => {
  return (
    <>
      {children}
    </>
  )
}

export default Avatar

