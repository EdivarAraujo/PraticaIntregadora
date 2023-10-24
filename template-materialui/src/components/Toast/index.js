import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notify(resp, message){
    if (resp === 'success') {
        toast[resp](message)
      } else if (resp === 'error') {
        toast[resp](message)}
        else if (resp === 'info') {
            toast[resp](message)}
  }

  export default Notify