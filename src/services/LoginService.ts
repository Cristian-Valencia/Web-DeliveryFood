import axios from 'axios';


export const loginUser = async () =>{
    const detailUrl= "http://l4com.labforweb.it/backend/web/test/ws/users/checkUser.php";
    const res = await axios.get(detailUrl)
    return res.data;
}