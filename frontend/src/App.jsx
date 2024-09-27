
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import DeleteBooks from "./pages/DeleteBooks";
import EditBooks from "./pages/EditBooks";
import ShowBooks from "./pages/ShowBooks";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/books/create' element={<CreateBooks></CreateBooks>}></Route>
      <Route path='/books/details/:id' element={<ShowBooks />}></Route>
      <Route path='/books/edit/:id' element={<EditBooks />}></Route>
      <Route path='/books/delete/:id' element={<DeleteBooks />}></Route>
    </Routes>
  );
};
export default App;