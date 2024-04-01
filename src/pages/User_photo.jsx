import React from "react"
const User_photo = (src) => {
    const main_src = src;
    const fallbackSrc = '/svg/User_photo_alt.svg';
  
    const onError = (e) => {
      e.target.src = fallbackSrc;
    };
  
    return <img className='User_photo' src={main_src} onError={onError} />;
  };

  export default User_photo;