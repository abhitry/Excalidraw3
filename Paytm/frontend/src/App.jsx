import { BrowserRouter, Routes,Route } from 'react-router-dom'
import {Signup} from "./pages/signup"
 import {Signin} from "./pages/signin"
  import {SendMoney} from "./pages/SendMoney"
  import {Dashboard} from "./pages/Dashboard"
  import {SuccessPage} from "./pages/success"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
           <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />  
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
