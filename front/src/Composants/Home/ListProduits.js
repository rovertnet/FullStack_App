import axios from 'axios';
import { useEffect, useState } from 'react';
import {Container,Pagination,Row,Col} from 'react-bootstrap';
import Prod from './Product';
const api = axios.create({
    baseURL:"http://localhost:4000/api/v1"
});

function List() {
    const [listProd, setListProd] = useState([])
    const [numPage, setNumPage] = useState(1)
    const [totalPages, setTotalPage] = useState(1)
    useEffect(()=>{
        const   allProducts = async (req,res)=>{
            api.get("/products?page=" +numPage+ "&limite=5")
            .then(resp=>{
                console.log(resp.data.Produits);
                setListProd(resp.data.Produits )
                setTotalPage(resp.data.totalPages)
            })
        }
        allProducts()
    },[numPage]);
    // ---------La pAgination du tableau--------
   let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item onClick={()=>setNumPage(number)} key={number} active={number===numPage} >
                {number}
            </Pagination.Item>
        );
    }
  return (
    <Container>
        <h2 className='text-center'>Liste de tous les produits</h2>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Catégorie</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>
                {listProd.map(p =>(<Prod nom={p.nom} cat={p.categorie} prix={p.prix} key={p._id} />))}
            </tbody>
        </table>
        <Row>
            <Col md={6} offset={3}>
                <Pagination>{items}</Pagination>
            </Col>
        </Row>
    </Container>
  )
}

export default List