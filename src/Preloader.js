import React, {useEffect} from "react";

const Preloader = () => {
  useEffect( () => {
    document.getElementById("maskoverlay").style.display = '';
    return () => {
      document.getElementById("maskoverlay").style.display = 'none';
    };
  });

  return null;
}

export default Preloader;
