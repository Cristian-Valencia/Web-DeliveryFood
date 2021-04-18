import axios from 'axios';


export const getUserDetail = async (userId:any) =>{
    const detailUrl= `http://l4com.labforweb.it/backend/web/index.php?r=utenti/profile&id_usr=${userId}`;
    const res = await axios.get(detailUrl)
    return res.data;
}