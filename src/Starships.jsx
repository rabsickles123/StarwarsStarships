export default function Starships(props) {

    const {data} = props

    return(<div className="shipcontainer">
        {data.map((ship, index) => {
            return (<div className = "ship" key={index}>{ship.name}</div>)
          })}
          </div>
    )
}