import React from "react";
// hooks
import useSelect from "../../hooks/useSelect";
//css module
import styles from "./Formulario.module.css";
import PropTypes from 'prop-types'

const Formulario = ({setCategory}) => {

  const listCategorys = [
    { value: "general", label: "Gereral" },
    { value: "entertainment", label: "Entrenimiento" },
    { value: "technology", label: "Tecnologia" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "business", label: "Negocios" },
    { value: "sports", label: "Deportes" }
  ];

  // hook
  const [category, SelectCategory] = useSelect("general", listCategorys);

  const handleOnSubmit = e => {
      e.preventDefault();
      setCategory(category);
  }

  return (
    <div className={`${styles.buscador} row`}>
      <div className='col 12 m8 offset-m2'>
        <form
        onSubmit={handleOnSubmit}
        >
          <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>

          <SelectCategory />

          <div className='input-field col s12'>
            <input
              type='submit'
              className={`${styles["btn-block"]} btn-large amber darken-2`}
              value='Buscar'></input>
          </div>

        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  setCategory: PropTypes.func.isRequired
}

export default Formulario;
