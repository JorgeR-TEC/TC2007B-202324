import React, { useState } from 'react';

const NuevoTicket = () => {
    const [datos, setDatos] = useState({
        coordinador: "",
        categoria: "",
        subcategoria: "",
        status: "",
        descripcion: "",
        comentario: "",
      });
  
      const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
          });
        };
  
      const handleSendData = async() => {
          console.log(JSON.stringify(datos))
          // Convert the form data to JSON
          const request = await new Request('http://127.0.0.1:1337/tickets', {
              method: 'POST',
              body: JSON.stringify(datos),
              headers: new Headers({ 'Content-Type': 'application/json' }),
          });
          try {
              const response = await fetch(request);
              if (response.status < 200 || response.status >= 300) {
                  throw new Error(response.statusText);
              }
              
          } catch {
              throw new Error('No se pudieron subir los datos');
          }
      };
      const {coordinador, categoria, subcategoria, status, descripcion, comentario}= datos;
      return(
          <div>
              <h2>Nuevo ticket</h2>
              <form>
                  <div>
                      <label htmlFor="coordinador">Coordinador:</label>
                      <input 
                          type="text"
                          id="coordinador"
                          name="coordinador"
                          value={coordinador}
                          onChange={handleChange}
                      />
                  </div>
                  <div>
                      <label htmlFor="categoria">Categoria:</label>
                      <input 
                          type="text"
                          id="categoria"
                          name="categoria"
                          value={categoria}
                          onChange={handleChange}
                      />
                  </div>
                  <div>
                      <label htmlFor="subcategoria">Subcategoria:</label>
                      <input 
                          type="text"
                          id="subcategoria"
                          name="subcategoria"
                          value={subcategoria}
                          onChange={handleChange}
                      />
                  </div>
                  <div>
                      <label htmlFor="status">Status:</label>
                      <input 
                          type="text"
                          id="status"
                          name="status"
                          value={status}
                          onChange={handleChange}
                      />
                  </div>
                  <div>
                      <label htmlFor="descripcion">Descripcion:</label>
                      <input 
                          type="text"
                          id="descripcion"
                          name="descripcion"
                          value={descripcion}
                          onChange={handleChange}
                      />
                  </div>
                  <div>
                      <label htmlFor="comentario">Comentario:</label>
                      <input 
                          type="text"
                          id="comentario"
                          name="comentario"
                          value={comentario}
                          onChange={handleChange}
                      />
                  </div>
                  <div>
                      <button type="button" onClick={handleSendData}>
                          Enviar Ticket
                      </button>
                  </div>
              </form>
          </div>
  
      );
};

export default NuevoTicket;