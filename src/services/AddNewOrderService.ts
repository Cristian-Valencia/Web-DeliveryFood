import axios from 'axios';


export const addNewOrder = async () =>{
    const detailUrl= "http://l4com.labforweb.it/backend/web/index.php?r=ordini/insert&id_usr=7";
    const res = await axios.get(detailUrl)
    return res.data;
}