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
import Tabs from './state/Tabs.js';
import Accordian from './state-drills/Accordian.js';

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

// data for Tabs component - passed as a prop
const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

// data for Accordian component - passed as a prop
const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

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
      <div>
        <Accordian sections={sections}/>
      </div>
      <main className='App'>
      <Split className="left" flexBasis={2}>
      This is the content for the left `Split`. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia? 
      <a href='www.google.com'>learn react</a>
      <Tooltip message='one more tooltip message'>
        Necessitatibus?
      </Tooltip> 
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
    <div className='tabsBox'>
      <Tabs tabs={tabsProp}/>
    </div>
    </div>
  );
}

export default App;