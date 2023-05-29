const LeftSidecomp = ({ list, handleSwitch }) => {
    return ( 
        <div className="thingsToDo">
            <h2>Things to do</h2>
            {list.map((thing) => (
                <div className="list-preview" key={thing.id}>
                    <h3>{thing.day}</h3>
                    <h5>{thing.todo}</h5>
                    <h5>{thing.time}</h5>
                    <button onClick={() => handleSwitch(thing.id)}>Set Done</button>
                    {/* <select >
                        <option value={done}>Not done</option>
                        <option value={done}>Done</option> 
                    </select> */}
                </div>
            ))}
        </div>
    );
    }
export default LeftSidecomp;