import * as React from 'react';
import './App.css';

import FilterView from './components/FilterView/FilterView';
import { VisibleProductList } from './containers/VisibleProductList';
import logo from './logo.svg';
import { mockFilters } from './mock/MockFilters';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-usg">
          <FilterView 
            filters={mockFilters} />
          <div className="App-catalog">
            <VisibleProductList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
