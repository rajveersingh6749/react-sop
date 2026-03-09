// import { useState } from 'react'
// import './App.css'
// import Box from './components/Box'
// import ChildComponent from './components/childComponent'
// import RenderProp from './components/RenderProp'
// import RowList from './components/RowList'
// import SeparatorList from './components/SeparatorList'
// import List from './components/ToArray'
// import Wrapper from './components/Wrapper'

import Toggle from './Toggle'
// import ToggleButton from './components/ToggleButton'
// import ToggleText from './components/ToggleText'
// import Toggle from './components/Toggle'
// import Component1 from './components/PropDrilling'
// import MyApp from './milestone_task/MyApp'
// import ChildCompo from './module_5/ChildCompo'
import ChildBox from './ChildBox'

function App() {
  // const [on, setOn] = useState(false)

  return (
    <>
      {/* <Component1 /> */}
      <h1>Module 5:</h1>
      <h2>Show / Hide Children</h2>

      <Toggle>
        <Toggle.Button />

        {/* Render Prop */}
        <Toggle.Display
          render={(open) =>
            open ? (
              <ChildBox>
                <p>First Child</p>
                <p>Second Child</p>
                <p>Third Child</p>
              </ChildBox>
            ) : null
          }
        />
      </Toggle>

      <br />
      <br />

      {/* <MyApp /> */}

      {/* <ChildComponent>
        33
        {44}
        hello hi
        <h1></h1>
        <></>
        <p>This is a child component.</p>
      </ChildComponent> */}

      {/* <RenderProp render={(count) => <h1>Total Count: {count}</h1>} /> */}

      {/* <ToggleButton on={on} setOn={setOn} />
      <ToggleText on={on} /> */}

      {/* <SeparatorList>
        <p>This is first item.</p>
        <p>This is second item.</p>
        <p>This is third item.</p>
      </SeparatorList>
      <RowList>
        <p>This is the list first item.</p>
        <p>This is the list second item.</p>
        <p>This is the third third item.</p>
      </RowList>
      <Box>
        <h4>Hello</h4>
      </Box>
      <List>
        <span>A</span>
        <span>B</span>
      </List>
      <Wrapper>
        <h1>Hello</h1>
      </Wrapper> */}
    </>
  )
}

export default App
