import "./AppNav.css"

export default function AppNav() {
    return <div>
        <ul style={{ listStyle: 'none', display: 'flex', lineHeight: '0px', color: 'gray' }}>
            <li style={{padding:'5px'}}>What to cook</li>
            <li style={{padding:'5px'}}>Recipe</li>
            <li style={{padding:'5px'}}>Ingredients</li>
            <li style={{padding:'5px'}}>Occasions</li>
            <li style={{padding:'5px'}}>About Us</li>
        </ul>
    </div>

}
