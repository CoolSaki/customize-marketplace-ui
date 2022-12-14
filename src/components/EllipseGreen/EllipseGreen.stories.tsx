import * as React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import { EllipseGreen } from './EllipseGreen'

storiesOf('EllipseGreen', module)
  .addDecorator(centered)
  .add('Icon', () => <EllipseGreen />)
