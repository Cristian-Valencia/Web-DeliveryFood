import axios from 'axios';


export const getUrserOrder = async () =>{
    const detailUrl= "http://l4com.labforweb.it/backend/web/index.php?r=utenti/ordini&id_usr=7";
    const res = await axios.get(detailUrl)
    return res.data;
}