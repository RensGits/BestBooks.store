import './ResultsIndicator.css'

export default function ResultsIndicator(props){
    return(
        <div className='resultsindicator-container'>
            <p>{props.numberOfResults}</p>
            <p>results found </p>
        </div>
    )
}