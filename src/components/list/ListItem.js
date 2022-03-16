import './ListItem.css'

export default function ListItem(props){
    console.log(props.data)
    return(
        <div className='list-item-container'>
            <p className='list-item-rank'>{props.data.rank}</p>
            <img className='list-item-image' src={props.data.book_image} alt=""/>
        </div>
        
    )
}