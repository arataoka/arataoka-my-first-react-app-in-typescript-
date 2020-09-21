import React,{useState} from 'react';

const Counter:React.FC<{}> = ()=>{
    const [value, setValue ] = useState<number>(0);
    const increment = () =>{
        setValue(prevState=>prevState +1);
    }
    const decrement = () =>{
        setValue(prevState=>prevState -1);
    }
    return (
        <div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        <div>value: {value}</div>
            </div>
    )
}

export default Counter;