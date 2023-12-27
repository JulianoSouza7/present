import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css'; // Importa o arquivo de estilos CSS


const CatImage = () => {
  const [catImage, setCatImage] = useState('');

  useEffect(() => {
    const fetchCatImage = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        const imageUrl = response.data[0]?.url || '';
        setCatImage(imageUrl);
      } catch (error) {
        console.error('Erro ao buscar imagem do gato:', error);
      }
    };

    fetchCatImage();
  }, []);

  return (
      <div className="main-container">
        <div className="content-container">
          <p className="birthday-text">Happy</p>
          <p className="birthday-text">Birthday</p>
          {catImage && (
              <img
                  src={catImage}
                  alt="Cat"
                  className="cat-image"
              />
          )}
          <div className="div-texto">
          <p className= "texto">
            BOM, GATINHA, ESSA É A PRIMEIRA VERSÃO, MAS EU QUERIA TE DESEJAR UM FELIZ ANIVERSÁRIO, MUITOS ANOS DE VIDA E TUDO DE BOM!
          </p>
          </div>
        </div>
      </div>
  );
};

export default CatImage;
