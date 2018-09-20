import React from 'react';
import './App.css';
import './Ninjas.css';

const Ninjas = ({ninjas, deleteNinja}) => {
        //const { ninjas } = props;
        /*deleteNinja = e => {
            console.log(e.target.id);
            let id = e.target.id;
            this.props.deleteNinja(id);
        }*/
        const ninjaList = ninjas.map(ninja => {
            if(ninja.age>2){
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name : {ninja.name}</div>
                    <div>Age : {ninja.age}</div>
                    <div>Belt : {ninja.belt}</div>
                    <button onClick={()=>{deleteNinja(ninja.id)}}>Delete Ninja</button>
                </div>
            )
            }
            else{
                return null;
            }
        })
        return(    
            <div className = "ninja-List">
                { ninjaList }
            </div>
        );
}

export default Ninjas;