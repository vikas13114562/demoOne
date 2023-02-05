import Hoc from "./Hoc"

function Two(props) {
    
    return (
      <div>
        <h1>{props.cnt}</h1>
        <button onClick={props.handleClick}>{props.name}</button>
      </div>
    )
}

export default Hoc(Two)
