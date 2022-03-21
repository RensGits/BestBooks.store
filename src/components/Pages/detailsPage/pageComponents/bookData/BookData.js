import _ from "lodash";

export default function BookData(props){
    console.log(_.map(props.data.buy_links))
    return(
        <>
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
            <div className="basicinfo-container">
                <p>Author: {props.data.author}</p>
                <p>Publisher: {props.data.publisher}</p>
                <p>ISBN: {props.data.isbns[0].isbn13}</p>
            </div>
            <div className="soldat-container">
                <p>Sold at:</p>
                <div>
                    {
                        _.map(props.data.buy_links).map((buyLink) => {
                            return <a href={buyLink.url} target='_blank' rel="noreferrer">{buyLink.name}</a>
                        })
                    }
                </div>
            </div>
        </>
    )
}