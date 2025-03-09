import { useEffect, useState } from "react"
import Item from "./Item"
import "./Content.css"

export default function Content() {

    const [items, setItems] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        // fetch('https://67cd343add7651e464ed9f4c.mockapi.io/api/v1/food/HuyHoang')
        fetch(`https://dummyjson.com/products?limit=8&skip=${page * 8}`)
            .then(res => res.json())
            .then(data => {
                // setItems(data)
                setItems(data.products)
                console.log(data.products);
            })
    }, [page])



    function handleBack() {
        if(page > 0) {
            setPage(page-1)
        }
        
    }

    function handleForward() {
            setPage(page+1)
    }

    return <>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'scroll',
            height: '100%',
            justifyContent: 'center',
        }}>
            {items.map((item, index) =>
                <Item item={item} key={index} />
            )}

            <li>
                <button style={{marginRight: '20px'}} onClick={() => handleBack()}>{'<<'}</button>
                <button  onClick={() => handleForward()} >{'>>'}</button>
            </li>

        </ul>

    </>
}
