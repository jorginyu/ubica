import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers/appReducer';

import { Container, Button } from 'reactstrap';
import MapComponent from './es/MapComponent/MapComponent';

const store = createStore(appReducer);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'none'
    };
    this.showMap = this.showMap.bind(this);
  }

  showMap() {
    console.log('Map displayed');
    this.setState({
      show: 'block'
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Container>
          <Button onClick={this.showMap} className="mt-5" block color="danger">Encontrar</Button>

          <div style={{ display: this.state.show }}>
            <MapComponent />
          </div>
          
        </Container>
      </Provider>
    );
  }
}