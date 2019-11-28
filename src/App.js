import React, { Component } from 'react';
import './App.css'

const typesClock = [
  'hms', 'mdY', 'Mdy', 'hm'
];

const month = [
  'January ',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

class App extends Component {
  state = {
    time: new Date(),
    currentType: 0,
  };

  componentDidMount() {
    setInterval(this.update, 1000);
  }

  update = () => {
    this.setState({
      time: new Date(),
    });
  };

  getClock = () => {
    const { time, currentType } = this.state;

    switch (typesClock[currentType]) {
      case 'hms': {
        const h = time.getHours();
        const m = time.getMinutes();
        const s = time.getSeconds();

        return (
          <div className='container hms'>
            {(h > 12) ? (h % 12) : h} : {(`0${m}`).slice(-2)} : {(`0${s}`).slice(-2)} {(h < 12) ? 'AM' : 'PM'}
          </div>
        );
      }

      case 'mdY': {
        const m = time.getMonth() + 1;
        const d = time.getDate();
        const Y = time.getFullYear();

        return (
          <div className='container mdY'>
            {m}/{d}/{Y}
          </div>
        );
      }

      case "Mdy": {
        const M = month[time.getMonth()];
        const d = time.getDate();
        const y = time.getFullYear().toString().slice(-2);

        return (
          <div className='container Mdy'>
            {M} {d} {y}
          </div>
        );
      }

      case 'hm': {
        const h = time.getHours();
        const m = time.getMinutes();

        return (
          <div className='container hm'>
            {(h > 12) ? (h % 12) : h} : {(`0${m}`).slice(-2)} {(h < 12) ? 'AM' : 'PM'}
          </div>
        );
      }
    }
  };

  toggleTypeClock = () => {
    this.setState(({currentType}) => ({
      currentType: (currentType + 1) % typesClock.length,
    }));
  };

  render() {
    return (
      <div onClick={this.toggleTypeClock}>
        {this.getClock()}
      </div>
    );
  }
}

export default App;
