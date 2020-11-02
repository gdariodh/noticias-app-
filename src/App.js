import React,{Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario/Formulario';
import ListadoNoticias from './components/ListadoNoticias'
import axios from 'axios'

function App() {

   const [category,setCategory] = useState('');
   const [noticias,setNoticias] = useState([]);

   useEffect(()=>{
     const requestApi = async () => {
       const key = `cb621a8e62db4fa89b85a30a08f2614f`;
       const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;
       const response = await axios.get(url);
       setNoticias(response.data.articles);
     };
     requestApi();

   },[category])

  return (
    <Fragment>
      <Header
        title='Buscador noticias'
      />
      <div className='container white'>

        <Formulario
          setCategory={setCategory}
        />

        <ListadoNoticias
        noticias={noticias}
        />

      </div>
    </Fragment>
  );
}

export default App;
