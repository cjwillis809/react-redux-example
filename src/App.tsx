import * as React from 'react';
import './App.css';

import FilterView from './components/FilterView/FilterView';
import ProductList from './components/ProductList/ProductList';
import logo from './logo.svg';
import { mockFilters } from './mock/MockFilters';
import { mockCatalog } from './mock/MockProducts';

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
          {
            mockCatalog.map(pc => 
              <ProductList
                key={pc.id}
                productCategory={pc} />
            )
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
