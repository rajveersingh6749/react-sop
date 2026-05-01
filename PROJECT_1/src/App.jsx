import './App.css'
import { lazy } from 'react'

const ComponentBasedUI = lazy(
  () => import('./Module1/module_1/Module1Demo1/ComponentBasedUI.jsx'),
)
const EmbeddingExpressions = lazy(
  () => import('./Module1/module_1/Module1Demo2/EmbeddingExpressions.jsx'),
)
const Props = lazy(() => import('./Module1/module_1/Module1Demo3/Props.jsx'))
const ReactElementsVsDomElements = lazy(
  () =>
    import('./Module1/module_1/Module1Demo4/ReactElements_vs_DomElements.jsx'),
)
const ProductCard = lazy(
  () => import('./Module1/milestone_task/ProductCardApp.jsx'),
)
const UseStateHook = lazy(
  () => import('./Module2/module_2/Module2Demo1/UseStateHook.jsx'),
)
const AdvancedCounterApp = lazy(
  () => import('./Module2/milestone_task/AdvancedCounterApp.jsx'),
)
const FormValidationDemo = lazy(
  () => import('./Module2/module_2/Module2Demo2/FormValidation.jsx'),
)
const UseEffectAdvancedApp = lazy(
  () => import('./Module3/module_3/UseEffectAdvancedApp.jsx'),
)
const AdvancedTimer = lazy(
  () => import('./Module3/milestone_task/AdvancedTimer.jsx'),
)
const Mod_4 = lazy(() => import('./Module4/module_4/mod_4.jsx'))
const Task4 = lazy(() => import('./Module4/milestone_task/Counter.jsx'))
const Mod_5 = lazy(() => import('./Module5/module_5/Mod_5.jsx'))
const Task5 = lazy(() => import('./Module5/milestone_task/MyApp.jsx'))
const Module6demo1 = lazy(
  () => import('./Module6/module_6/module6_demos/module6Demo1/module6_demo1'),
)
const Module6demo2 = lazy(
  () =>
    import('./Module6/module_6/module6_demos/module6Demo2/module6_demo2.jsx'),
)
const Module6demo3 = lazy(
  () =>
    import('./Module6/module_6/module6_demos/module6Demo3/module6_demo3.jsx'),
)
const Task6 = lazy(() => import('./Module6/milestone_task/toggleTheme.jsx'))
const Module7demo1 = lazy(
  () => import('./Module7/module_7/module7demo1/First.jsx'),
)
const Module7demo2 = lazy(
  () => import('./Module7/module_7/module7demo2/Second.jsx'),
)
const Module7demo3 = lazy(
  () => import('./Module7/module_7/module7demo3/Third.jsx'),
)
const Module7demo4 = lazy(
  () => import('./Module7/module_7/module7demo4/Fourth.jsx'),
)
const Task7 = lazy(() => import('./Module7/milestone_task/Fifth.jsx'))
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
const NotFound = lazy(() => import('./NotFound.jsx'))
const Home = lazy(() => import('./Home.jsx'))
const Module8demo1 = lazy(
  () => import('./Module8/module_8/module8demo1/First.jsx'),
)
const Module8demo2 = lazy(
  () => import('./Module8/module_8/module8demo2/Second.jsx'),
)
const Module8demo3 = lazy(
  () => import('./Module8/module_8/module8demo3/Third.jsx'),
)
import { useState } from 'react'
const Login = lazy(() => import('./Module8/Login'))
const ProtectedRoute = lazy(() => import('./Module8/ProtectedRoute'))
const MileStone8 = lazy(() => import('./Module8/milestone_task/MileStone8.jsx'))
const Transition = lazy(
  () => import('./Module8/start_transition/Transition.jsx'),
)
const Module9demo1 = lazy(
  () => import('./Module9/module_9/Module9demo1/ReactMemo.jsx'),
)
const Module9demo2 = lazy(
  () => import('./Module9/module_9/Module9demo2/UseMemo.jsx'),
)
const Module9demo3 = lazy(
  () => import('./Module9/module_9/Module9demo3/UseMemo.jsx'),
)
const Module9demo4 = lazy(
  () => import('./Module9/module_9/Module9demo4/UseCallback.jsx'),
)
const Module9demo5 = lazy(
  () => import('./Module9/module_9/Module9demo5/UseCallback.jsx'),
)
const Module9demo6 = lazy(
  () => import('./Module9/module_9/Module9demo6/RenderList.jsx'),
)
const Module9demo7 = lazy(
  () => import('./Module9/module_9/Module9demo7/ListVirtualization.jsx'),
)
const Module9demo8 = lazy(
  () => import('./Module9/module_9/Module9demo8/AutoMemo.jsx'),
)
const MileStone9demo1 = lazy(
  () => import('./Module9/milestone_task/Demo1/MilestoneTask9demo1.jsx'),
)
const MileStone9demo2 = lazy(
  () => import('./Module9/milestone_task/Demo2/MilestoneTask9demo2.jsx'),
)
const MileStone9demo3 = lazy(
  () => import('./Module9/milestone_task/Demo3/MilestoneTask9demo3.jsx'),
)
const ControlledCompo = lazy(() => import('./Add/ControlledCompo.jsx'))
const UncontrolledCompo = lazy(() => import('./Add/UncontrolledCompo.jsx'))
const Count = lazy(() => import('./Add/UncontrolledCount.jsx'))
const ControlledCompoForm = lazy(() => import('./Add/ControlledCompoForm.jsx'))
const ReactHelmets = lazy(
  () => import('./Add/React_Helmets/ReactHelmetsApp.jsx'),
)
const PropTypes = lazy(() => import('./Add/Prop_Types/PropTypes.jsx'))
const ClassNames = lazy(
  () => import('./Add/ClassnamesPackage/ClassNamePackage.jsx'),
)
const SuspenseUserDetails = lazy(
  () => import('./Add/Suspense/SuspenseUserDetails.jsx'),
)
const DemoSuspense = lazy(() => import('./Add/Suspense2/DemoSuspense.jsx'))
const ErrorBoundary = lazy(() => import('./Add/ErrorBoundary/ErrorB.jsx'))
const HOC = lazy(() => import('./Add/HOC/HigherOrderComponent.jsx'))
const FormValidation = lazy(
  () => import('./React_Form_Validation/FormValidation.jsx'),
)
const ReduxToolKit = lazy(() => import('./ReduxToolKit/ReduxApp.jsx'))
const Redux = lazy(() => import('./Redux/Redux.jsx'))
const Redux_Todo = lazy(() => import('./Redux_Todo/Redux_Todo.jsx'))
const AuthCompo = lazy(() => import('./Authentication_System/AuthCompo.jsx'))
const Notes = lazy(() => import('./Notes_App_RTK/Notes.jsx'))
const CreateAsyncThunk = lazy(
  () => import('./createAsyncThunk/CreateAsyncThunk.jsx'),
)

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
              <Link to='/component_based_ui' className='nav_link3'>
                Module1 Demo1: Component Based UI
              </Link>
              <Link to='/embedding_expressions' className='nav_link3'>
                Module1 Demo2: JSX, Embedding Expressions, class vs className
                and Self-Closing Tags
              </Link>
              <Link to='/props' className='nav_link3'>
                Module1 Demo3: Props, PropTypes, Default Props
              </Link>
              <Link to='/react_elements_vs_dom_elements' className='nav_link3'>
                Module1 Demo4: React Elements vs DOM Elements
              </Link>
              <Link to='/product_card' className='nav_link3'>
                Milestone Task: Product Card
              </Link>
              <Link to='/use_state_hook' className='nav_link3'>
                Module2 Demo1: UseState Hook Managing Local Component State
              </Link>
              <Link to='/form_handling' className='nav_link3'>
                Module2Demo2 Form Handling
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
              <Link to='/helmet' className='nav_link3'>
                React Helmets
              </Link>
              <Link to='/prop_types' className='nav_link3'>
                PropTypes
              </Link>
              <Link to='/classnames' className='nav_link3'>
                Classnames
              </Link>
              <Link to='/suspense' className='nav_link3'>
                Suspense using use() API
              </Link>
              <Link to='/demoSuspense' className='nav_link3'>
                Suspense using useEffect() hook
              </Link>
              <Link to='/errorBoundary' className='nav_link3'>
                Error Boundary
              </Link>
              <Link to='/hoc' className='nav_link3'>
                HOC
              </Link>
              <Link to='/form_validation' className='nav_link3'>
                React Form Validation
              </Link>
              <Link to='/redux_toolkit' className='nav_link3'>
                Redux ToolKit
              </Link>
              <Link to='/redux' className='nav_link3'>
                Redux
              </Link>
              <Link to='/redux_todo' className='nav_link3'>
                Redux_Todo
              </Link>
              <Link to='/auth' className='nav_link3'>
                Authentication System
              </Link>
              <Link to='/notes' className='nav_link3'>
                Notes App
              </Link>
              <Link to='/createAsyncThunk' className='nav_link3'>
                CreateAsyncThunk
              </Link>
            </nav>
          </div>

          <div className='route_container3'>
            <div className='custom_container3'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route
                  path='/component_based_ui'
                  element={<ComponentBasedUI />}
                />
                <Route
                  path='/embedding_expressions'
                  element={<EmbeddingExpressions />}
                />
                <Route path='/props' element={<Props />} />
                <Route
                  path='/react_elements_vs_dom_elements'
                  element={<ReactElementsVsDomElements />}
                />
                <Route path='/product_card' element={<ProductCard />} />
                <Route path='/use_state_hook' element={<UseStateHook />} />
                <Route path='/form_handling' element={<FormValidationDemo />} />
                <Route path='/milestone2' element={<AdvancedCounterApp />} />
                <Route path='/module3' element={<UseEffectAdvancedApp />} />
                <Route path='/milestone3' element={<AdvancedTimer />} />
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
                <Route path='/controlled' element={<ControlledCompo />} />
                <Route path='/uncontrolled' element={<UncontrolledCompo />} />
                <Route path='/count' element={<Count />} />
                <Route
                  path='/controlledCount'
                  element={<ControlledCompoForm />}
                />
                <Route path='/helmet/*' element={<ReactHelmets />} />
                <Route path='/prop_types' element={<PropTypes />} />
                <Route path='/classnames' element={<ClassNames />} />
                <Route path='/suspense' element={<SuspenseUserDetails />} />
                <Route path='/demoSuspense' element={<DemoSuspense />} />
                <Route path='/errorBoundary' element={<ErrorBoundary />} />
                <Route path='/hoc' element={<HOC />} />
                <Route path='/form_validation' element={<FormValidation />} />
                <Route path='/redux_toolkit' element={<ReduxToolKit />} />
                <Route path='/redux' element={<Redux />} />
                <Route path='/redux_todo' element={<Redux_Todo />} />
                <Route path='/auth' element={<AuthCompo />} />
                <Route path='/notes' element={<Notes />} />
                <Route
                  path='/createAsyncThunk'
                  element={<CreateAsyncThunk />}
                />

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
