import React from 'react'
import Typist from 'react-typist'

const Title = () => {
    return (
        
        <Typist avgTypingDelay={100} cursor={{hideWhenDone: true, hideWhenDoneDelay: 0}} >
            <div className="typist">
                COVID-19 Tracker
            </div>
            <Typist.Delay ms={2000} />
            <br />
            <div className="aldrich">
                made by Aldrich Ang...
            </div>
            <Typist.Backspace count={22} delay={3000} />
        </Typist>
        
    )
}

export default Title
