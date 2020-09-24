import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip.js';
import Messages from './Messages';
import TheDate from './state/TheDate.js';
import Counter from './state/Counter/Counter.js';
import HelloWorld from './state-drills/HelloWorld.js';
import Bomb from './state-drills/Bomb.js';
import RouletteGun from './state-drills/RouletteGun.js';

// make 2 tooltips here and 1 inside the App directly
const firstTooltip = (
  <Tooltip color='hotpink' message='tootip message'>
    ipsum
  </Tooltip>
);

const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <div>
      <TheDate />
      <HelloWorld />
      <Counter counter={123}/>
      <Bomb />
      <RouletteGun />
      <Messages name="Messages" unread={0}/>
      <Messages name="Notifications" unread={10}/>
    <main className='App'>
      <Split className="left" flexBasis={2}>
      This is the content for the left `Split`. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia? 
      <Tooltip message='one more tooltip message'>
        Necessitatibus?
      </Tooltip> 
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
    </div>
  );
}

export default App;