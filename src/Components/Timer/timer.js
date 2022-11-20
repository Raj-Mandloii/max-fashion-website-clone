import React from "react";

export default function Timer({setTimeUp,timeUp}) {
  const [count, setCount] = React.useState(5);
   
  React.useEffect(() => {
    
    const id = setInterval(() => {
        if(count <= 0){
            console.log('time up')
            setCount(5);
            setTimeUp(true);
            
        }
      console.log("====++=");
      setCount((prev) => prev - 1);
    }, 1000);
    const cleanup = () => {
      clearTimeout(id);
    };
    return cleanup;
  }, []);

  return <div>{count}</div>;
}
