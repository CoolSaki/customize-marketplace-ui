import * as React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import { EllipseYellow } from './EllipseYellow'

storiesOf('StarWalletIcon', module)
  .addDecorator(centered)
  .add('Icon', () => <EllipseYellow />)
