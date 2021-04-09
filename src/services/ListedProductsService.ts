import axios from 'axios';


export const getProducts = async (id:string) =>{
    const detailUrl= `http://l4com.labforweb.it/backend/web/index.php?r=ristoranti/ristoranti-prodotti&IdRistorante=${id}`;
    const res = await axios.get(detailUrl)
    return res.data;
}
