import React, { useState } from 'react';

const Todo = () => {

    const [inputData, setinputData] = useState('');
    const [item, setitem] = useState([]);

    const addIt = () => {
        if(!inputData){

        }else{
            setitem([...item , inputData]);
            setinputData("");
        }
    }

    const del = (id) => {
        console.log(id);
        const updateOne = item.filter((ele , ind) => {
            return ind !== id;
        })
        setitem(updateOne);
    }
    
    const remo = () => {
        setitem([]);
    }

    return (
        <div className="mt-5">
            <div>
                <input type="text" placeholder="Add Item" value={inputData} onChange={(e) => setinputData(e.target.value)} />
                <button onClick={addIt}>Add</button>
            </div>
            <div className="mt-5">
                {
                    item.map((ele , ind) => {
                        return(
                            <div key={ind}><p> {ele} <button onClick={() => del(ind)}>Delete</button> </p></div>
                        )
                    })
                }
            </div>

            <div>
                <button onClick={remo}> Remove All </button>
            </div>
        </div>
    );
};

export default Todo;