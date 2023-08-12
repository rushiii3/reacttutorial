import { useEffect, useState, createContext } from "react";
import "./App.css";
import { Home } from "./Components/Home";
// import { Task } from './Task';
// import { Name } from './Name';
import axios from "axios";
// import { Excuse } from './Excuse';
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/react";
// import { Music } from './Music';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Music } from "./Music";
import { ErrorPage } from "./ErrorPage";
import { Skeletonn } from "./Skeleton";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import { Forms } from "./Components/Forms";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { Login } from "./Components/Login";
export const AppContext = createContext();
function App() {
  const client = new QueryClient();
  const [Username, setUsername] = useState("Hruhi");

  // const [Text, setText] = useState("");
  // useEffect(() => {
  //   axios.get("https://catfact.ninja/fact").then(response => setText(response.data.fact));
  // }, [])

  // const [Input, setInput] = useState("");
  // const [ToDoList, setToDoList] = useState([]);
  // const AddTodo = () =>{
  //   const todoNew = {
  //     id:ToDoList.length === 0 ? 0 : ToDoList[ToDoList.length - 1].id + 1,
  //     task:Input,
  //     status:"i",
  //   }
  //   setToDoList([...ToDoList,todoNew]);
  //   setInput("");
  // }
  // const DeleteTodo = (task_id) => {
  //   const toDoFilter = ToDoList.filter((value) => {
  //     if(task_id!==value.id){
  //       return true
  //     }else{
  //       return false;
  //     }
  //   })
  //   setToDoList(toDoFilter);
  // }
  // const completeTodo = (task_idd) => {
  //   const DoneTodo = ToDoList.map((value) => {
  //     if(task_idd === value.id){
  //       return {...value, status : "c"};
  //     }else{
  //       return value;
  //     }
  //   })
  //   setToDoList(DoneTodo);
  // }
  //   const age = 0;
  //   const cars = ["Saab", "Volvo", "BMW"];
  //   const myArr = [
  //     {
  //      studenName: "jack",
  //      studenClass: 6,
  //      studenSection: "a"
  //     },
  //     {
  //      studenName: "tom",
  //      studenClass: 6,
  //      studenSection: "a"
  //     }
  // ];
  // const Planets = [
  //   {name:"Mars",isGasPlanet:false},
  //   {name:"Earth",isGasPlanet:false},
  //   {name:"venus",isGasPlanet:false},
  //   {name:"Jupyter",isGasPlanet:true},
  //   {name:"Neptune",isGasPlanet:true},
  //   {name:"uranus",isGasPlanet:true},
  // ]
  // const [count, setcount] = useState(0);
  // const handleCounteIncrease = () => {
  //   setcount(count+1);
  // }
  // const handleCounterDecrease = () => {
  //   setcount(count-1);
  // }

  // const handleCounterZero = () => {
  //   setcount(0);
  // }
  return (
    <div>
      {/* <Checkbox defaultSelected>Option</Checkbox> */}
      {/* <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Senior SDE" company="Google" />
      {
        age>=20 ? (<h1>Yes 18 Plus</h1>) : (<h1>Under 18 plus</h1>)
      }
      {
        cars.map((car,keys) => {
          return <h1 key={keys}>{car}</h1>
        })
      }
      {
        myArr.map((stu,key) => {
          return <User name={stu.studenName.toUpperCase()} class={stu.studenClass} section={stu.studenSection.toUpperCase()} />
        })
      }
      {
        Planets.map((value)=>{
          if(value.isGasPlanet){
            return <Planet name={value.name}/>;
          }else{
            return false;
          }
          
        })
      }
      <p>
      {count}
      </p>
      <p>
        <button onClick={handleCounteIncrease}>Increase</button>
        <button onClick={handleCounterDecrease}>Decrease</button>
        <button onClick={handleCounterZero}>Zero</button>
      </p> */}
      {/* <div >
        <input type='text' onChange={(e) => {setInput(e.target.value)}} value={Input} />
        <button onClick={AddTodo}>Add</button>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        {
          
          ToDoList.map((task) => {
            return <Task id={task.id} task={task.task} DeleteTask={DeleteTodo} CompleteTask={completeTodo} Status={task.status}/>
          })
        }
       
        {
          Text
        }
      </div> */}
      {/* <Name />
        <Excuse />
        <Button>Hello</Button>
        <Music /> */}
  <QueryClientProvider client={client}>
      <AppContext.Provider value={{ Username }}>
        <Provider store={store}>
        <Router>
          <Link to="/music">Music</Link>
          <Link to="/skeleton">skeleton</Link>
          <Link to="login">Login </Link>
          <Routes>
            <Route path="/music" element={<Music />} />
            <Route path="/skeleton" element={<Skeletonn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        </Provider>
      </AppContext.Provider>
    </QueryClientProvider>
    </div>
  );
}

// const Job = (props) => {
//   return <div>
//     <h1 className={styles.name}>Salary is {props.salary} for position of {props.position} in {props.company}</h1>
//   </div>
// }
// const Planet = (props) => {
//   return <>
//     <h1> {props.name} is GasPlanet</h1>
//   </>
// }
export default App;
