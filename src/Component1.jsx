import { useState, useEffect } from "react";
import LeftSidecomp from "./LeftSideComp";
import { Object } from "./Object";
// import { ObjectList } from "./ObjectList";
import RightSideComp from "./RightSideComp";

const Component1 = () => {

    const [list, setList] = useState(() => {
        const localData = localStorage.getItem('list');
        return localData ? JSON.parse(localData) : [
            {
                day: "Monaday",
                id: 1,
                todo: 'clean',
                time: "13-16"
            },
            {   day: "tuesday",
                id: 2,
                todo: 'gym',
                time: "10-12"
            },
            {   day: "Saturday",
                id: 3,
                todo: 'study',
                time: "12-04"
                
            },
            {   day: "tuesday",
                id: 4,
                todo: 'shop',
                time: "15-20"
            }
        ];
    });

    const [todo, setTodo] = useState('');
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [finishedList, setFinishedList] = useState(() => {
        const localData = localStorage.getItem('finishedList');
        return localData ? JSON.parse(localData) : [];
    });


    
    const handleSwitch = (id) => {
        const updatedList = list.filter(item => item.id !== id);
        setList(updatedList);
        for(let i = 0; i < list.length; i++){
            if(id === list[i].id){
                setFinishedList(oldList => [...oldList, list[i]]);
            }
        }
    }
    
    const handleDelete = (id) => {
        const updatedList = finishedList.filter(item => item.id !== id);
        setFinishedList(updatedList);
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
        localStorage.setItem('finishedList', JSON.stringify(finishedList))

    }, [list, finishedList]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let newItem = new Object(day, Math.random()*10- 1, todo, time);
        setList(oldList => [...oldList, newItem]);
        localStorage.setItem('list', JSON.stringify(list));
    }

    return (
        <div>
            <div className="content">
                <header className="header">
                    <h3>Todo List</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        placeholder="day"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}/>
                        <input
                        type="text"
                        placeholder="todo"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}/>
                        <input
                        type="text"
                        placeholder="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}/>

                        <button>Add todo</button>
                    </form>
                </header>
                <article className="list">

                    <section className="leftList">
                        <LeftSidecomp list={list} handleSwitch={handleSwitch} />
                    </section>
                    <section className="rightList">
                        <RightSideComp finishedList={finishedList} handleDelete={handleDelete} />

                    </section>
                </article>
            </div>
        </div>
    );
}

export default Component1;
