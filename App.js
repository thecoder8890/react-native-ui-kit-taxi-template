import React, { Component } from 'react'
import Navigtaion from './src/components/screensnavigation/index';
import { Font } from 'expo';

export default class App extends Component {

  componentDidMount() {
    Font.loadAsync({
      'lyftpro-bold': require('./assets/fonts/lyftpro-bold.ttf'),
      'lyftpro-light': require('./assets/fonts/lyftpro-light.ttf'),
      'lyftpro-medium': require('./assets/fonts/lyftpro-medium.ttf'),
      'lyftpro-semibold': require('./assets/fonts/lyftpro-semibold.ttf'),
      'proximanova-bold': require('./assets/fonts/proximanova-bold.ttf'),
      'proximanova-medium': require('./assets/fonts/proximanova-medium.ttf'),
      'proximanova-regular': require('./assets/fonts/proximanova-regular.ttf'),
    });
  }
  render() {
    return (
      <Navigtaion />
    )
  }
}