import React from 'react';

const Contact = (props) => {
    console.log(props);
    setTimeout(()=>{
        props.history.push('/about')
    },2000
    )
    return (
        <div className="container">
            <div className="center">
                <h4>Contact</h4>
                <p>This is Contact Page</p>
            </div>
        </div>
    )
}

export default Contact;