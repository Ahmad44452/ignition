import { toast } from "react-toastify";

////////// value = ''
const showToast = (value, msg) => {
  toast[value](msg, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export default showToast;