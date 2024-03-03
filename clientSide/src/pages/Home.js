import React, { useEffect, useState } from "react";
import { product } from "./../const/const";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import OffCanvas from "../component/OffCanvas";
function Home({
  handleClose,
  show,
  addToCart,
  cartItems,
  deleteFromCart,
  searchValue,
}) {
  const [filtred, setFiltred] = useState([]);
  useEffect(() => {
    setFiltred(
      product.filter((elem) =>
        elem.title.toUpperCase().includes(searchValue.toUpperCase())
      )
    );
  }, [searchValue]);
  return (
    <div className="m-5 d-flex flex-wrap justify-content-center gap-5">
      {console.log("from home")}
      {filtred.map((elem, i) => (
        <Card style={{ width: "18rem" }} key={i}>
          <Card.Img variant="top" src={elem.imageUrl} />
          <Card.Body>
            <Card.Title>{elem.title}</Card.Title>
            <Card.Text>{elem.description}</Card.Text>
            <Button variant="primary" onClick={() => addToCart(elem)}>
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      ))}
      <OffCanvas
        handleClose={handleClose}
        show={show}
        cartItems={cartItems}
        deleteFromCart={deleteFromCart}
      />
    </div>
  );
}

export default Home;
