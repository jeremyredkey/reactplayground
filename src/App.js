import React from 'react';
import Split from './composition/Split.js';
import { Button } from '@material-ui/core';

function App() {
  return (
    <main className='App'>
<Split className="left">
        This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
      <Button color="primary">Cool Button</Button>
    </main>
  );
}

export default App;
