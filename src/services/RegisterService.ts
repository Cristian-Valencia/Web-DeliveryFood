import axios from 'axios';


export const registerUser = async (user:any) =>{
    const detailUrl= "http://l4com.labforweb.it/backend/web/test/ws/users/addUser.php";
    const res = await axios.post(detailUrl, user)
    return res.data;
}