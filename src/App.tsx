import React, { FC } from 'react';
import { Button } from 'antd';
import './App.css';
import About from "./components/About/About"
import FormTable from "./components/FormTable/FormTable"
const App: FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <About />
    <FormTable />
  </div>
)

export default App;
