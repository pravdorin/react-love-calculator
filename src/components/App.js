import React from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';
import Logo from './Logo';
import loveCalculator from '../api/love-calculator';

class App extends React.Component {
  state = { percentage: 0, phrase: '' };

  calcLove = async (name, crash) => {
    const response = await loveCalculator.get(
      'getPercentage?rapidapi-key=bd035e0607msh08dc22b1b8c9880p1491e1jsnd5233de85592',
      {
        params: {
          fname: name,
          sname: crash,
        },
      },
    );

    this.setState({
      percentage: response.data.percentage,
      phrase: response.data.result,
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='calculator'>
          <Logo />
          <div className='calculator__block'>
            <Form calcLove={this.calcLove} />
            <Result percentage={this.state.percentage} phrase={this.state.phrase} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
