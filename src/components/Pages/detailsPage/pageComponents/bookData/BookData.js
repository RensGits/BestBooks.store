import './BookData.css'
import _ from "lodash";

export default function BookData(props){
    console.log(_.map(props.data.buy_links))

    const capitalizedTitle = props.data.title.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ')

    return(
        <div className="bookdata-container">
            <h1>{capitalizedTitle}</h1>
            <p className='bookdata-description'>{props.data.description}</p>
            <div className="basicinfo-container">
                <p>Author: {props.data.author}</p>
                <p>Publisher: {props.data.publisher}</p>
                {props.data.primary_isbn13 && 
                    <p>ISBN: {props.data.primary_isbn13}</p>
                }  
            </div>
            <div >
                <p className='soldat-header'>Sold at:</p>
                <div className="soldat-items-container">
                    {
                        _.map(props.data.buy_links).map((buyLink) => {
                            return <a className='soldat-item' href={buyLink.url} target='_blank' rel="noreferrer">{buyLink.name}</a>
                        })
                    }
                </div>
            </div>
        </div>
    )
}