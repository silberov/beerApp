import React from 'react';
import ColorTitle from './components/ColorTitle';
import SubTitle from './components/SubTitle';

function App() {
  return (
    <div className="App">
      <ColorTitle color={"#454545"} title={"Movember"} />
      <SubTitle text={"Moustache-Worthy Beer"} amount={"20 L"} isDark={false} />
    </div>
  );
}

export default App;
