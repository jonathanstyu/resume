import React, {Component} from 'react';
import Menu from './components/menu';
import Content from './components/content';
import Footer from './components/footer';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Menu />
        <Content />
        <Footer />
      </div>
    )
  }
}
