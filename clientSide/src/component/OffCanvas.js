import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffCanvas({ handleClose, show ,cartItems,deleteFromCart}) {
    
  return (
    <div>
      <>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          {cartItems.map((elem,i)=>(
            <div key={i}>
              <div>{elem.title}</div>  
              <button className="btn btn-danger" onClick={()=>deleteFromCart(elem.id)}>Delete</button>
            </div>
          )
          )}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
}

export default OffCanvas;
