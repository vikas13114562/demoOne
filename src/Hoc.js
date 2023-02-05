import React,{useState} from 'react'

function Hoc(ChildCom) {
    function NewCom(props) {
        const [cnt, setCnt] = React.useState(0);
        function handleClick() {
            setCnt(cnt => cnt+1)
        }
        return(
            <>
                <ChildCom cnt = {cnt} handleClick = {handleClick} />
            </>
        )
    }

    return NewCom;
}

export default Hoc;