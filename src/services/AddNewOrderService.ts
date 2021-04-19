import axios from 'axios';


export const addNewOrder = async (order:any) =>{
    const detailUrl= "http://l4com.labforweb.it/backend/web/test/ws/users/insertOrdine.php";
    const res = await axios.post(detailUrl,order)
    return res.data;
}