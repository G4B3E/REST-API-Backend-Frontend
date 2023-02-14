import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface State {
  merevlemezek: Merevlemez[];
  tarhely: number;
  marka: string;
  sebesseg: number;
}

interface Merevlemez {
  tarhely: number;
  marka: string;
  sebesseg: number;
}

interface MerevlemezListResponse {
  merevlemezek: Merevlemez[];
}


class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      tarhely:0,
      marka: '',
      sebesseg: 0,
      merevlemezek: [],
      
    }
  }

  async loadMerevlemezek() {
    let response = await fetch('http://localhost:3000/merevlemezek');
    let data = await response.json() as MerevlemezListResponse;
    this.setState({
      merevlemezek: data.merevlemezek,
    })
  }
  componentDidMount() {
    this.loadMerevlemezek();
  }
  render() {
    const { tarhely, marka, sebesseg } = this.state;

    return <div>
      <ul>
        {
          
        }
      </ul>
    </div>;
  }
}

export default App;
