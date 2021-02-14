import {BrowserRouter,Route} from "react-router-dom"
import Login from "./loginpage"
import Home from "./home"


const Root=()=>{


    return(
<BrowserRouter>
<Route path="/" exact component={Login}  />
<Route path="/home" exact component={Home}  />
</BrowserRouter>
    )
}

export default Root


