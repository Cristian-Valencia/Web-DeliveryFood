import axios from 'axios';


export const registerUser = async () =>{
    const detailUrl= "http://l4com.labforweb.it/backend/web/test/ws/users/addUser.php";
    const res = await axios.get(detailUrl)
    return res.data;
}