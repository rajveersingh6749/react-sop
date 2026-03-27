import './App.css'
import Card1 from './Module1/module_1/components/Card1'
import Task1 from './Module1/milestone_task/task1'
import MyForm from './Module2/module_2/MyForm'
import Counter from './Module2/milestone_task/Counter'
import Task3 from './Module3/module_3/task3.jsx'
import TimerComponent from './Module3/milestone_task/TimerComponent'
import Mod_4 from './Module4/module_4/mod_4.jsx'
import Task4 from './Module4/milestone_task/Counter.jsx'
import Mod_5 from './Module5/module_5/Mod_5.jsx'
import Task5 from './Module5/milestone_task/MyApp.jsx'
import Module6demo1 from './Module6/module_6/module6_demos/module6Demo1/module6_demo1'
import Module6demo2 from './Module6/module_6/module6_demos/module6Demo2/module6_demo2.jsx'
import Module6demo3 from './Module6/module_6/module6_demos/module6Demo3/module6_demo3.jsx'
import Task6 from './Module6/milestone_task/toggleTheme.jsx'
import Module7demo1 from './Module7/module_7/module7demo1/First.jsx'
import Module7demo2 from './Module7/module_7/module7demo2/Second.jsx'
import Module7demo3 from './Module7/module_7/module7demo3/Third.jsx'
import Module7demo4 from './Module7/module_7/module7demo4/Fourth.jsx'
import Task7 from './Module7/milestone_task/Fifth.jsx'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound.jsx'
import Home from './Home.jsx'
import Module8demo1 from './Module8/module_8/module8demo1/First.jsx'
import Module8demo2 from './Module8/module_8/module8demo2/Second.jsx'
import Module8demo3 from './Module8/module_8/module8demo3/Third.jsx'
import { useState } from 'react'
import Login from './Module8/Login'
import ProtectedRoute from './Module8/ProtectedRoute'
import MileStone8 from './Module8/milestone_task/MileStone8.jsx'
import Transition from './Module8/start_transition/Transition.jsx'
import Module9demo1 from './Module9/module_9/Module9demo1/ReactMemo.jsx'
import Module9demo2 from './Module9/module_9/Module9demo2/UseMemo.jsx'
import Module9demo3 from './Module9/module_9/Module9demo3/UseMemo.jsx'
import Module9demo4 from './Module9/module_9/Module9demo4/UseCallback.jsx'
import Module9demo5 from './Module9/module_9/Module9demo5/UseCallback.jsx'
import Module9demo6 from './Module9/module_9/Module9demo6/RenderList.jsx'
import Module9demo7 from './Module9/module_9/Module9demo7/ListVirtualization.jsx'
import Module9demo8 from './Module9/module_9/Module9demo8/AutoMemo.jsx'
import MileStone9demo1 from './Module9/milestone_task/Demo1/MilestoneTask9demo1.jsx'
import MileStone9demo2 from './Module9/milestone_task/Demo2/MilestoneTask9demo2.jsx'
import MileStone9demo3 from './Module9/milestone_task/Demo3/MilestoneTask9demo3.jsx'
import Module10demo1 from './Module10/module_10/module10demo1/UnitTesting.jsx'
import ControlledCompo from './Addi1/ControlledCompo.jsx'
import UncontrolledCompo from './Addi1/UncontrolledCompo.jsx'
import Count from './Addi1/UncontrolledCount.jsx'
import ControlledCompoForm from './Addi1/ControlledCompoForm.jsx'
import ReactHelmet from './Addi1/ReactHelmet.jsx'
import ReactH from './Addi1/ReactHelmet/ReactH.jsx'
import PropCompo from './Addi1/Prop_Types/PropCompo.jsx'
import Temp from './Addi1/Prop_Types/temp.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <BrowserRouter>
        <div className='main_container'>
          <div className='nav_container3'>
            <nav className='list_container'>
              <Link to='/' className='nav_link3'>
                Home
              </Link>
              <Link to='/module1' className='nav_link3'>
                Module 1 Props
              </Link>
              <Link to='/milestone1' className='nav_link3'>
                Milestone Task 1 Product Card
              </Link>
              <Link to='/module2' className='nav_link3'>
                Module 2 State and Events
              </Link>
              <Link to='/milestone2' className='nav_link3'>
                Milestone Task 2 Counter App
              </Link>
              <Link to='/module3' className='nav_link3'>
                Module 3 Effects and Side Effects
              </Link>
              <Link to='/milestone3' className='nav_link3'>
                Milestone Task 3 Timer Components
              </Link>
              <Link to='/module4' className='nav_link3'>
                Module 4 Custom Hooks and Reusability
              </Link>
              <Link to='/milestone4' className='nav_link3'>
                Milestone Task 4 useLocalStorage(Reusable Hook)
              </Link>
              <Link to='/module5' className='nav_link3'>
                Module 5 Component Composition, Children and Render Props
              </Link>
              <Link to='/milestone5' className='nav_link3'>
                Milestone Task 5 Modal Component
              </Link>
              <Link to='/module6demo1' className='nav_link3'>
                Module6demo1 Prop Drilling(Problem)
              </Link>
              <Link to='/module6demo2' className='nav_link3'>
                Module6demo2 Context Provider
              </Link>
              <Link to='/module6demo3' className='nav_link3'>
                Module6demo3 useMemo and useCallback(Preview)
              </Link>
              <Link to='/milestone6' className='nav_link3'>
                Milestone Task 6 Theme Management
              </Link>
              <Link to='/module7demo1' className='nav_link3'>
                Module7demo1 Browser Router
              </Link>
              <Link to='/module7demo2' className='nav_link3'>
                Module7demo2 Dynamic Routing
              </Link>
              <Link to='/module7demo3' className='nav_link3'>
                Module7demo3 Nested Routes
              </Link>
              <Link to='/module7demo4' className='nav_link3'>
                Module7demo4 Programmatic Navigation
              </Link>
              <Link to='/milestone7' className='nav_link3'>
                Milestone Task 7 3-Page App
              </Link>
              {/* <Link to='/module8demo1' className='nav_link3'>
                Module8demo1 Axios
              </Link>
              <Link to='/module8demo2' className='nav_link3'>
                Module8demo2 Loading and Error States
              </Link>
              <Link to='/module8demo3' className='nav_link3'>
                Module8demo3 use hook
              </Link> */}
              <Link to='/module8' className='nav_link3'>
                Module 8 Data Fetching and Async Patterns
              </Link>
              <Link to='/milestone8' className='nav_link3'>
                Module 8 Milestone Task use() API
              </Link>
              <Link to='/transition' className='nav_link3'>
                Module 8 Bonus: startTransition()
              </Link>
              <Link to='/module9demo1' className='nav_link3'>
                Module9demo1 ReactMemo
              </Link>
              <Link to='/module9demo2' className='nav_link3'>
                Module9demo2 requirement of useMemo
              </Link>
              <Link to='/module9demo3' className='nav_link3'>
                Module9demo3 useMemo
              </Link>
              <Link to='/module9demo4' className='nav_link3'>
                Module9demo4 requirement of useCallback
              </Link>
              <Link to='/module9demo5' className='nav_link3'>
                Module9demo5 useCallback
              </Link>
              <Link to='/module9demo6' className='nav_link3'>
                Module9demo6 Render Large List(Problem)
              </Link>
              <Link to='/module9demo7' className='nav_link3'>
                Module9demo7 List Virtualization
              </Link>
              <Link to='/module9demo8' className='nav_link3'>
                Module9demo8 Automatic Memoization
              </Link>
              <Link to='/milestone9demo1' className='nav_link3'>
                Milestone Task 9 Without Optimization
              </Link>
              <Link to='/milestone9demo2' className='nav_link3'>
                Milestone Task 9 With React.memo
              </Link>
              <Link to='/milestone9demo3' className='nav_link3'>
                Milestone Task 9 with React 19 Compiler
              </Link>
              <Link to='/module10demo1' className='nav_link3'>
                Module10demo1 Unit Testing
              </Link>
              <Link to='/controlled' className='nav_link3'>
                Controlled Component
              </Link>
              <Link to='/uncontrolled' className='nav_link3'>
                Uncontrolled Component
              </Link>
              <Link to='/count' className='nav_link3'>
                Uncontrolled Component (Counter App)
              </Link>
              <Link to='/controlledCount' className='nav_link3'>
                Controlled Component Form
              </Link>
              <Link to='/reactHelmet' className='nav_link3'>
                React Helmet
              </Link>
              <Link to='/reactH' className='nav_link3'>
                React Helmets
              </Link>
              <Link to='/propTypes' className='nav_link3'>
                PropTypes
              </Link>
              <Link to='/temp' className='nav_link3'>
                PropTypes Example
              </Link>
            </nav>
          </div>

          <div className='route_container3'>
            <div className='custom_container3'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route
                  path='/module1'
                  element={<Card1 name='Dave' age='22' />}
                />
                <Route path='/milestone1' element={<Task1 />} />
                <Route path='/module2' element={<MyForm />} />
                <Route path='/milestone2' element={<Counter />} />
                <Route path='/module3' element={<Task3 />} />
                <Route path='/milestone3' element={<TimerComponent />} />
                <Route path='/module4' element={<Mod_4 />} />
                <Route path='/milestone4' element={<Task4 />} />
                <Route path='/module5' element={<Mod_5 />} />
                <Route path='/milestone5' element={<Task5 />} />
                <Route path='/module6demo1' element={<Module6demo1 />} />
                <Route path='/module6demo2' element={<Module6demo2 />} />
                <Route path='/module6demo3' element={<Module6demo3 />} />
                <Route path='/milestone6' element={<Task6 />} />

                <Route path='/module7demo1/*' element={<Module7demo1 />} />
                <Route path='/module7demo2/*' element={<Module7demo2 />} />
                <Route path='/module7demo3/*' element={<Module7demo3 />} />
                <Route path='/module7demo4/*' element={<Module7demo4 />} />

                <Route path='/milestone7/*' element={<Task7 />} />

                {/* Module 8 */}
                {/* <Route path='/module8demo1' element={<Module8demo1 />} />
                <Route path='/module8demo2' element={<Module8demo2 />} />
                <Route path='/module8demo3' element={<Module8demo3 />} /> */}

                {/* Module 8 */}
                <Route
                  path='/module8'
                  element={
                    <Login
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  }
                />

                <Route
                  path='/module8/module8demo1'
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                      <Module8demo1 />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path='/module8/module8demo2'
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                      <Module8demo2 />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path='/module8/module8demo3'
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                      <Module8demo3 />
                    </ProtectedRoute>
                  }
                />

                <Route path='/milestone8/*' element={<MileStone8 />} />
                <Route path='/transition' element={<Transition />} />

                <Route path='/module9demo1' element={<Module9demo1 />} />
                <Route path='/module9demo2' element={<Module9demo2 />} />
                <Route path='/module9demo3' element={<Module9demo3 />} />
                <Route path='/module9demo4' element={<Module9demo4 />} />
                <Route path='/module9demo5' element={<Module9demo5 />} />
                <Route path='/module9demo6' element={<Module9demo6 />} />
                <Route path='/module9demo7' element={<Module9demo7 />} />
                <Route path='/module9demo8' element={<Module9demo8 />} />
                <Route path='/milestone9demo1' element={<MileStone9demo1 />} />
                <Route path='/milestone9demo2' element={<MileStone9demo2 />} />
                <Route path='/milestone9demo3' element={<MileStone9demo3 />} />
                <Route path='/module10demo1' element={<Module10demo1 />} />
                <Route path='/controlled' element={<ControlledCompo />} />
                <Route path='/uncontrolled' element={<UncontrolledCompo />} />
                <Route path='/count' element={<Count />} />
                <Route
                  path='/controlledCount'
                  element={<ControlledCompoForm />}
                />
                <Route path='/reactHelmet' element={<ReactHelmet />} />
                <Route path='/reactH/*' element={<ReactH />} />
                <Route path='/propTypes' element={<PropCompo />} />
                <Route path='/temp' element={<Temp />} />

                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
