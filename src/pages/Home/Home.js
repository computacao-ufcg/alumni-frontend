import React from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'

const Home = () => {
    return(
        <React.Fragment>
            <Header></Header>
            <div className={'homePage'}>
                <Title name={"Home"}/> 
            </div>
        </React.Fragment>
    )
}

export default Home