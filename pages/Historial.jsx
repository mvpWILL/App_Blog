import React, { useState } from 'react';
 import '../pages/Historial.css'
const Historial = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [comment, setComment] = useState('');
  const [historialData, setHistorialData] = useState(null);

  const handleRegister = async () => {
    try {
      // Hacer una solicitud GET al servidor para obtener el historial
      const response = await fetch(`http://localhost:8081/APi/Tutorials?title=${title}&imageUrl=${imageUrl}&description=${description}&comment=${comment}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Historial obtenido con éxito:', data);
        setHistorialData(data); // Almacena los datos en el estado
      } else {
        console.error('Fallo al obtener el historial');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
    
      <button id='but'  type='button' onClick={handleRegister}>
        Ver historial
      </button>
    
      
  <h2>Historial:</h2>
      {historialData && (
        <div className='historial-cards'>
        
          {historialData.map((item, index) => (
            
            <div key={index} className="card">
              <h3>{item.title}</h3>
              <img src={item.imageUrl} alt={item.title} />
              <p>{item.description}</p>
            
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Historial;
