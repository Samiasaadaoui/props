import React from 'react'
import Card from 'react-bootstrap/Card';



    
    function CardProfile({user}) {
      return (
        <div className='fontarriere'>
   <div className='produit'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={user.img.image}/>
          <Card.Body>
            <Card.Title>{user.fullname}</Card.Title>
            <Card.Text>
             {user.profession}
            </Card.Text>
            
          </Card.Body>
        </Card>
        </div>
        </div>
      );
    }
  
    
  

export default CardProfile