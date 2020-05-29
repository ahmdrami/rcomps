/** @jsx jsx */
import { Fragment, FunctionComponent } from 'react'
import { jsx } from 'theme-ui'
type ButtonProps = {
  /** Click hander */
  onClick?: any
  /** Color of the button */
  variant: 'secondary' | 'primary'
}
/**
 * An example button
 **/
const Button: FunctionComponent<ButtonProps> = ({
  variant = 'primary',
  children,
  ...props
}) => {
  return (
    <Fragment>
      <button
        sx={{
          variant: `buttons.${variant}`,
          padding: 3,
          borderColor: 'currentColor',
          borderRadius: 2,
          fontSize: [12, 14, 16],
        }}
        {...props}
      >
        {children}
      </button>
    </Fragment>
  )
}

export default Button
