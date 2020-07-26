import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGufs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
// import { getGifs } from '../helpers/getGifs'

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])

    const { loading, data: images } = useFetchGufs(category)

    return (
        <>
            <h3>{category}</h3>

            {loading && <p className="animate__animated animate__flash">loading...</p>}
            <div className="card-grid">
                {
                    images.map((img) => {
                        return (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
