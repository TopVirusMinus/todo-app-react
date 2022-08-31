export const Dropdown = ({setFilter})=>{
    const changeFilter = (e)=>{
        setFilter((prev)=>prev = e.target.value)
    }

    return (
        <select className="dropDown" onChange={changeFilter}>
            <option>All</option>
            <option>Completed</option>
            <option>Uncompleted</option>
        </select>
    );
}