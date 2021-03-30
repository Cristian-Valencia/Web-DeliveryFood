import axios from 'axios';


export const getProducts = async () =>{
    const detailUrl= "http://l4com.labforweb.it/backend/web/index.php?r=ristoranti/list";
    const res = await axios.get(detailUrl)
    return res.data;
}
