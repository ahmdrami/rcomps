#!/usr/local/bin/node
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const handlebars = require('handlebars')

const params = process.argv.slice(2)

const name = params[0]
const saveLocation = params[1]

if (!name || !saveLocation) {
  console.error('Missing args component name and location')
  process.exit()
} else if (saveLocation && !saveLocation.match(/^\.\/src.*\/$|^src.*\/$/)) {
  console.error('Destination path should start with src/ and ends with / e.g. src/components/')
  process.exit(1)
}
const component = `
import React, { FunctionComponent } from 'react'
import { {{name}}Props } from './{{name}}.model'

/**
- {{name}} component
**/
const {{name}}: FunctionComponent<{{name}}Props> = ({
  children,
}) => {
  return (
    <>
      {children}
    </>
  )
}

export default {{name}}

`

const model = `
export type {{name}}Props = {
}
`

const story = `
import React, { FunctionComponent } from 'react'
import {{name}} from './{{name}}'

export const Default: FunctionComponent = () => <{{name}}>Edit me</{{name}}>

export default {
  title: 'Components|{{name}}',
  component: {{name}},
}

`

const test = `
import React from 'react'
import { screen, render } from '@testing-library/react'
import {{name}} from './{{name}}'

describe('{{name}}', () => {
  test('should render the component', () => {
    render(<{{name}}>Hi</{{name}}>)
    expect(screen.getByText(/hi/i)).toBeInTheDocument()
  })

  test('should create a snaphot', () => {
    const { asFragment } = render(
      <{{name}}>Hi</{{name}}>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
`

const data = [
  {
    name,
    fileName: `${name}.tsx`,
    component: component,
  },
  {
    name,
    fileName: `${name}.model.ts`,
    component: model,
  },
  {
    name,
    fileName: `${name}.stories.tsx`,
    component: story,
  },
  {
    name,
    fileName: `${name}.test.tsx`,
    component: test,
  },
]

function generateTemplate({ component, name, location, fileName }) {
  const template = handlebars.compile(component)
  const content = template({ name })

  const dirname = `${location}${name}/`
  try {
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname)
    }
    fs.writeFileSync(`${dirname}${fileName}`, content)
    console.log(`Successfully created: ${dirname}${fileName}`)
  } catch (error) {
    console.error(error)
    process.exit()
  }
}

data.forEach(({ component, name, fileName }) =>
  generateTemplate({
    component,
    fileName,
    name,
    location: saveLocation,
  }),
)
