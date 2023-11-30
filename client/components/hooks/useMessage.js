import { toast } from "react-toastify";

const useMessage = () => {
  const showMessage = (type, message, ifPromise) => {
    toast(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: type,
    });
  };
  return showMessage;
};

export default useMessage;
