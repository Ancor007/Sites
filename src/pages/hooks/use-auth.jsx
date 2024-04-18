import { useSelector } from "react-redux";

export function useAppSelector(){
    const {username, token, name} = useSelector(state => state.user);


return{
    isAuth: !!token,
    name,
    lastname,
    age,
    username,
    token
};
}