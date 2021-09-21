import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Input from './index';
import CenterView from '../CenterView';

// styles
import styles from './styles'

storiesOf('Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('stock with border', () => (
    <Input style={{ ...styles.default ,...styles.withBorder}} />
  ))
  .add('stock with placeholder', () => (
    <Input placeholder='placeholder' />
  ));
