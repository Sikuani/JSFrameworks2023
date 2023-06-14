const Welcome = (props) => {
    const myName = props.name || "user@"
    return <h1>Hello {myName}</h1>

}

export default Welcome