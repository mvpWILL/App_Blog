import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 import Input_blog from '../atoms/Input_blog';
 import Button_blog from '../atoms/Buton_Blog';
 import '../../estylos/Main.css'

const BlogForm =() => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleRegister = async () => {
    try {
      // Hacer una solicitud POST al servidor para registrar un nuevo usuario
      const response = await fetch('http://localhost:8081/APi/Tutorials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, imageUrl, description, }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registro exitoso:', data);
        window.location.href='/historial';
      } else {
        console.error('Fallo en el registro');
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

  const handlePublish = () => {
    console.log('Título:', title);
    console.log('Descripción:', description);
    console.log('Imagen URL:', imageUrl);
  };

  return (
      
    <div className="blog-form-organism">
     
 
      <div className="blog-form-left">
        
        {imageUrl ? (
          <img src={imageUrl} alt=" Verifica la URL de tu imagen :(" />
        ) : (
          <img src="img.avif" alt="Logo" />
        )}
      </div>

      <div id="card" className="blog-form-right">
         <h1>Publicar blog</h1> 
         
        <Input_blog placeholder="Título" value={title} onChange={handleTitleChange} 
         required={title}
         />
      
         <Input_blog
          type="text"
          placeholder="URL de la imagen"
          value={imageUrl}
          onChange={handleImageUrlChange}
          required={imageUrl}
        />
        <Input_blog
          placeholder="Descripción"
          value={description}
          onChange={handleDescriptionChange}
          required={description}
        />

                <Button_blog label="Publicar" onClick={handleRegister} />
                

                 
                <p id='link'>
                  <Link  to={'/historial'}> Ingresar </Link>
                </p>
                

             
      </div>
      
    </div>
 
  );
}

export default BlogForm;
