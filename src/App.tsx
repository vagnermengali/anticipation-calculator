import Authenticator from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <>
      <Authenticator />
      <ToastContainer
        toastStyle={{ backgroundColor: "#ffffff", color: "grey" }} autoClose={1500} />
    </>
  )
}

export default App
