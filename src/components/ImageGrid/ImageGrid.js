import React, {useState, useEffect} from 'react'
import './style.css'
import './loadingstyle.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import {loadImages, setImages, setError} from '../../actions'
import {connect} from 'react-redux'

const key = "fqRaywpQxhpcV-Qbybxyy2_JpiQYTqfKJWf6iTRGyxw"

const url = "https://api.unsplash.com/photos/random/?count=10&client_id=" + key;

function ImageGrid() {
    const [image, setImage] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchData()
        setIsLoading(false)
    }, [])

    const fetchData = async () => {  
        const result = await fetch(url)
        const data = await result.json()
        setImage([...image, ...data])   
    }

    return (
        <InfiniteScroll dataLength = {image.length} next = {fetchData} hasMore = {true} loader = {<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}>
            <div className = "content">
                <section className = "grid">
                    {isLoading ? (
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    ) :
                    (image.map(image => (
                        <div key = {image.id} className = {`item item-${Math.ceil(
                                    image.height / image.width,
                                )}`}>
                            <img src = {image.urls.small} alt = {image.user.username}/>
                        </div>
                    )))}
                </section>
            </div>
        </InfiniteScroll>
  
    )
}

const mapStateToProps = ({isLoading, images, error}) => ({
    isLoading,
    images,
    error
})
const mapDispatchToProps = () => ({loadImages,
    setImages,
    setError}) ;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageGrid)
