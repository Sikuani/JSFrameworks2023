const Welcome = (props) => {
    const myName = props.name || "user@3" 
    return <h1>Hello {myName}</h1>

}

export default Welcome