import axios from 'axios';


export const getDetailOrder = async (id:any) =>{
    const detailUrl= `http://l4com.labforweb.it/backend/web/index.php?r=utenti/ordine&IdOrdine=${id}`;
    const res = await axios.get(detailUrl)
    return res.data;
}