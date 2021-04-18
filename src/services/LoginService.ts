import axios from 'axios';


export const loginUser = async (user:any) =>{
    const detailUrl= "http://l4com.labforweb.it/backend/web/test/ws/users/checkUser.php";
    const res = await axios.post(detailUrl, user)
    return res.data;
}