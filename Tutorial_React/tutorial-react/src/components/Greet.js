import React from 'react'


const Greet = (props) => {
    console.log(props)
    return (
        <div xs={12} md={6} lg={3}>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}
export default Greet