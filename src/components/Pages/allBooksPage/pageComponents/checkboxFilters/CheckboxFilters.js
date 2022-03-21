import './CheckboxFilters.css'

export default function CheckBoxFilter(props){

    return(
        <>  
            <p className='filter-header'>{props.header}</p>
            <div className='checkboxes-container'>
                {   props.data.map((author,index) => {  // return author checkbox for each author
                        return( 
                                <div className='checkbox-label-container' key={'checkBox' + index}>
                                    <label className='checkbox-label' htmlFor={author}>{author}</label>
                                    <input className='checkbox-input' type="checkbox" id={author} />
                                </div>
                        )
                    })
                }
            </div>
        </>
    )
}