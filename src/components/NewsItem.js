import React from 'react'

const NewsItem = (props)=>{
        return (
            <div className='container'>
                <div className="card my-2" style={{minWidth:"248px",maxWidth:"400px"}}>
                    <span style={{zIndex:"2"}}className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{props.source}</span>
                    <img src={props.imageurl === null ? "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=100&q=60&w=200" : props.imageurl} className="card-img-top" alt="..." style={{ height: "155px", }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title === null ? "Title Unavaiable" : props.title} </h5>
                        <p className="card-text">{props.description === null ? "Description Unavailable" : props.description.slice(0, 40)}...</p>
                        <p className="card-text" style={{ fontSize: "14px" }}><small className="text-muted"><b>{props.author === null ? "Unkown" : props.author} </b> on {props.date === null ? "Not Known" : (new Date(props.date).toGMTString()).slice(0, 25)}</small></p>

                        <a target='_blank' href={`${props.newsurl}`} rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div >
        )
}
export default NewsItem
