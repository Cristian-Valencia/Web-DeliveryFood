import axios from 'axios';


export const getUrserOrder = async (userId:any) =>{
    const detailUrl= `http://l4com.labforweb.it/backend/web/index.php?r=utenti/ordini&id_usr=${userId}`;
    const res = await axios.get(detailUrl)
    return res.data;
}