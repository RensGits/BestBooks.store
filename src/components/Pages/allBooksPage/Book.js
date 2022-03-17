import './Book.css'

export default function Book(props){
    console.log('test')
    console.log(props.data)
    return(
        <div className='book-container'>
            <p>test</p>
            <p>{props.data.book_image}</p>
        </div>
    )
}