const RightSideComp = ({ finishedList, handleDelete }) => {
    return (
        <div>
            <h2>Finished things</h2>
            <div className="finishedThings">
            
            {finishedList.map((thing) => (
                <div className="finishedList-preview" key={thing.id}>
                    <h3>{thing.day}</h3>
                    <h5>{thing.todo}</h5>
                    <h5>{thing.time}</h5>
                    <button onClick={() => handleDelete(thing.id)}>Delete</button>
                    
                </div>
            ))}
        </div>
        </div>
        
    );
}
 
export default RightSideComp;