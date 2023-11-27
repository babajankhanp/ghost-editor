/**
Author - Babajan
Git - https://github.com/babajanpatan
* */
import { toast } from "react-toastify";

const triggerToast = (message, type = "error") => {
  toast(message, {
    autoClose: 5000,
    closeButton: false,
    type,
    hideProgressBar: false,
    position: toast.POSITION.TOP_RIGHT,
    pauseOnHover: true,
    style: {
      fontWeight: 500,
    },
  });
};

export default triggerToast;
