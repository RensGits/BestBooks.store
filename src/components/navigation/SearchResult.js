import './SearchResult.css'

export default function SearchResult(props){
    console.log('search result appeared')
    return(
        <div className='searchresult-container'>
            <img className='searchresult-bookcover' src={props.data.book_image} alt="" />
            <p className='searchresult-booktitle'>{props.data.title}</p>
            <p className='searchresult-divider'>-</p>
            <p className='searchresult-bookauthor'>{props.data.author}</p>
        </div>
    )
}