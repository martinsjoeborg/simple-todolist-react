// const TodoList = (props) => {
//     const list = props.list;
//     const handleDelete = (id) => {
//         const updatedList = list.filter(item => item.id !== id);
//         setList(updatedList);
//     }

    
//     list.map((thing) => (
//         <div className="list" key={thing.id}>
//             <h3>{thing.day}</h3>
//                 <h5>{thing.todo}</h5>
//                 <h5>{thing.time}</h5>
//                 <button onClick={() => handleDelete(thing.id)}>Delete</button>
//                 <select>
//                     <option value="Done">Done</option>
//                 </select>
//         </div>
//     ));
//     //  const html = list.map((thing) => {
//     //      return (
//     //           <div key={thing.id}>
//     //              <h3>{thing.day}</h3>
//     //              <h5>{thing.todo}</h5>
//     //              <h5>{thing.time}</h5>
//     //              <button onClick={() => handleDelete(thing.id)}>Delete</button>
//     //              <select>
//     //                  <option value="notDone">Not Done</option>
//     //                  <option value="Done">Done</option>
//     //              </select>
//     //          </div>
//     //      );
//     //  })
// }
 
// export default TodoList;