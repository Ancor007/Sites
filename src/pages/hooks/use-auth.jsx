import { UseSelector, useSelector } from "react-redux";

export function userAuth(){
    const {user, token} = useSelector(state => state.user);


return{
    isAuth: !!token,
    token
};
}