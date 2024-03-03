import { useCallback, useMemo, useState } from "react";
import CustomNav from "./layouts/CustomNav";
import Home from "./pages/Home";
import DataGridDemo from "./component/Table";
import { ShowContext } from "./context/ShowContext";

function App() {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const handleClose = useCallback(() => setShow(false), []);
  const handleShow = useCallback(() => setShow(true), []);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }
  function deleteFromCart(id) {
    setCartItems(cartItems.filter((elem) => elem.id !== id));
  }

  function handleSearchValue(e) {
    setSearchValue(e.target.value);
  }

  let returnValue = useMemo(
    () => ({ show, handleClose, handleShow }),
    [show, handleClose, handleShow]
  );
  console.log(ShowContext);

  return (
    <ShowContext.Provider value={returnValue}>
      <CustomNav
        handleShow={handleShow}
        cartItems={cartItems}
        handleSearchValue={handleSearchValue}
      />
      <Home
        handleClose={handleClose}
        show={show}
        addToCart={addToCart}
        cartItems={cartItems}
        deleteFromCart={deleteFromCart}
        searchValue={searchValue}
      />
      <DataGridDemo />
    </ShowContext.Provider>
  );
}

export default App;
