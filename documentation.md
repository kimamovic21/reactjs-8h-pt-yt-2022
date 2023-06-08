React Course For Beginners - Learn React in 8 Hours

04 Module

-useState React hook
-importujemo useState
-kreiramo const [age, setAge] = useState(0);
-kreiramo funkciju incrementAgeHandler koja mijenja stanje varijable
-kreiramo const [inputValue, setInputValue] = useState('');
-kreiramo input element
-input elementu dodajemo onChange dogadaj
-kreiramo inputChangeHandler funkciju
-kreiramo Name komponentu
-kreiramo const [showTest, setShowTest] = useState(true)
-kreiramo toggleTextHandler funkciju
-u Name.jsx komponenti dodajemo  uslov{} ispod button elementa
-kreiramo const [textColor, setTextColor] = useState("black")


05 Module
-ToDo App
-kreiramo dva div elementa
-unutar prvog div elementa kreiramo input i button elemente
-kreiramo const [todoList, setTodoList] = useState([])
-kreiramo const [newTask, setNewTask] = useState("")
-kreiramo newTaskHandler funkciju
-u newTaskHandler funkciju dodajemo setNewTask(e.target.value)
-const [todoList, setTodoList] = useState([])
-kreiramo addTodoList funkciju
-u addTodoList funkciju kreiramo const newTodoList = [...todoList, newTask];
-u addTodoList dodajemo setTodoList(newTodoList)
-button elementu dodajemo onClick dogadaj 
-onClick dogadaju prislijedujemo addTodoList funkciju
-u div elementu sa klasom list dodajemo todoList.map() metodu
-u funkciji todoListHandler dodajemo setTodoList([...todoList, newTask])
-u todoList.map metodi dodajemo button element da obrisemo task
-kreiramo deleteTaskHandler funkciju
-u funkciji deleteTaskHandler kreiramo novu varijablu newTodoList
-funkciji deleteTaskHandler dodajemo if uslov
-u funkciji addTodoListHandler kreiramo task objekt varijablu
-kreiramo completeTaskHandler funkciju
-kreiramo Complete button element sa onClick dogadajem kojem proslijedujemo completeTaskHandler funkciju


06 Module
-kreiramo useEffect funkciju sa dva parametra, callback funkcijom i praznim nizom []


07 Module
-npm i axios
-importujemo Axios u App7.js fajl
-kreiramo [randomFact, setRandomFact] = useState("")
-kreiramo useEffect React hook
-kreiramo fetchRandomFact funkciju
-u useEffectReact hook, unutar callback funkcije, dodajemo fetchRandomFact funkciju
-button elementu Generate Random Fact dodajemo onClick dogadaj
-unutar onClick dogadaja proslijedujemo fetchRandomFact funkciju
-kreiramo funkciju fetchRandomAge
-button elementu Predict Age dodajemo onClick dogadaj
-onClick dogadaju proslijedujemo fetchRandomAge funkciju
-kreiramo const [name, setName] = useState("")
-input elementu dodajemo onChange dogadaj


08 Module
-npm i react-router-dom
-U App8.js fajl importujemo { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


09 Module
-kreiramo ChangeProfile.jsx komponentu
-u App9.js fajlu kreiramo [username, setUser] = useState("Kerim Imamovic")
-u App9.js fajlu Home i Profile komponentama dodajemo props username
-u Profile.jsx komponentu importujemo ChangeProfile.jsx komponentu
-u App9.js fajl importujemo useContext React hook
-kreiramo export const AppContext = createContext()
-u return izjavi dodajemo <AppContext.Provider></AppContext.Provider>
-dodajemo AppContext.Provider value={{username, setUsername}}
-u Home.jsx komponentu importujemo useContext React hook
-u Home.jsx komponentu importujemo AppContext
-u Home.jsx komponenti kreiramo const { username } = useContext(AppContext)
-isto ponovimo za Profile.jsx komponentu
-isto ponovimo za ChangeProfile.jsx komponentu


10 Module
-npm i @tanstack/react-query
-u App10.js fajl importujemo import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
-kreiramo const client = new QueryClient()
-u Home.jsx importujemo useQuery React hook
-u Home.jsx importujemo axios
-u Home.jsx ispod Home funkcije dodajemo useQuery() React hook


11 Module
-npm i react-hook-form
-npm yup
-u Form.jsx komponentu importujemo useForm React hook
-u Form.jsx komponenti kreiramo const {register, handleSubmit} = useForm()
-kreiramo onSubmitHandler funkciju
-form elementu dodajemo onSubmit={handleSubmit(onSubmitHandler)}
-input elementima dodajemo atribut register
-u Form.jsx komponentu dodajemo import * as yup from 'yup'
-kreiramo varijablu schema
-npm i @hookform/resolvers@2.3.1
-u Form.jsx komponentu dodajemo import { yupResolver } from '@hookform/resolvers/yup'
-useForm React hook dodajemo objekt kao inicijalno stanje
-ispod input elementa dodajemo p element u kojem ce se prikazivati greska


12 Module
-kreiramo useToggle.js komponentu
-u useToggle.jsx komponenti kreiramo const [state, setState] = useState(initialVal)
-kreiramo toggle funkciju
-dodajemo return [state, toggle]
-kreiramo useGetFact.jsx komponentu
-u useGetFact.jsx komponenti kreiramo refetchData funkciju


13 Module
-npm i prop-types
-u Person.jsx komponenti kreiramo Person.propTypes = { ... }
-kreiramo novu react app za typescript
