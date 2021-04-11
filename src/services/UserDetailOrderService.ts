import axios from 'axios';


export const getDetailOrder = async () =>{
    const detailUrl= "http://l4com.labforweb.it/backend/web/index.php?r=utenti/ordine&IdOrdine=1";
    const res = await axios.get(detailUrl)
    return res.data;
}