import React, { useState } from 'react';
import CategoryAdd from './components/CategoryAdd.js'
import GifGrid from './components/GifGrid.js';
// import PropTypes from 'prop-types'

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['One punch'])

    // const categories = ['One push', 'Samurai x', 'Dragon ball']

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd
                setCategories={setCategories}
            />
            <hr />
            <ol>
                {
                    categories.map(category => {
                        return (
                            <GifGrid 
                                key={category}
                                category={category} 
                            />
                        )
                    })
                }
            </ol>
        </>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp
