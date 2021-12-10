import React from 'react';
import BeerProrps from './components/BeerProrps';
import ColorTitle from './components/ColorTitle';
import Description from './components/Description';
import SubTitle from './components/SubTitle';

function App() {
  return (
    <div className="App">
      <ColorTitle color={"#454545"} title={"Movember"} />
      <SubTitle isDark={true} text={"Moustache-Worthy Beer"} />
      <SubTitle isDark={false} text={"ingredients for "} amount={20} units={"L"} />
      <BeerProrps ibu={50} abv={4.5} og={1098} fg={1013} />
      <Description text={"A deliciously robust, black malted beer with a decadent dark, dry cocoa flavour that provides an enticing backdrop to the Cascade hops."} />
    </div>
  );
}

export default App;
