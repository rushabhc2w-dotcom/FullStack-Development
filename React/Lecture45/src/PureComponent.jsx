


function PureComponent(){

    return(
        <>
        <h1>keeping Components Pure</h1>
        <Cup guest={1}/>
        <Cup guest={3}/>
        <Cup guest={5}/>
        </>
    )
}

const Cup=({guest})=>{

    let count=guest;
    return (
        <h1>We have {count} guest and we have to make {count} cup of tea</h1>
    )
}

export default PureComponent