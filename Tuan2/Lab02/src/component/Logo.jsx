import logo from "../assets/avatar_small.png"
import searchImg from "../assets/search.png"

export default function Logo() {
    return <div>
        <img src={logo} style={{ width: '150px', marginRight: '20px' }}></img>
        <div style={{ display: "flex" }}>
            <img src={searchImg} style={{ height: '30px' }}></img>
            <input type='text' style={{ background: 'White', borderRadius: '5px', border: 'solid Gray 1px', height:'30px', width:'250px', color:'gray' }}>
            </input>
        </div>
    </div>
}   