import "./About.css";
import { useState, useEffect } from "react";
//Importamos useDebounce de la libreria que hemos instalado
import { useDebounce } from "use-debounce";
//Importamos axios
import axios from "axios";

const About = () => {
  //Creamos un estado inputValue que empiece siendo "", para buscar los cocktails
  const [inputValue, setInputValue] = useState("");
  //Creamos un estado con un array vacio donde almacenar los resultados de la busqueda
  const [cocktails, setCocktails] = useState([]);
  //"Debounceamos" el estado inputValue 700 milisegundos para que no se lance una petición cada vez que escribimos
  const [value] = useDebounce(inputValue, 700);
  //Creamos un estado para controlar los errores
  const [error, setError] = useState(false);

  const searchCocktail = async () => {
    //Siempre que lanzamos la busqueda desactivamos los errores
    setError(false);
    try {
      //Intentamos hacer la petición con axios y posteriormente seteamos los resultados en el array de cocktails
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`
      );
      setCocktails(res.data.drinks);
      
    } catch (error) {
      //Si la petición arroja algun tipo de error, lo que hacemos es setear error en true
      setError(true);
    }
  };

  
  useEffect(() => {
    searchCocktail();
  }, [value]);

  return (
    <main>
      <div className="search">
        <input
          type="text"
          placeholder="Cocktail name..."
          value={inputValue}
          onInput={(ev) => setInputValue(ev.target.value)}
        />
      </div>

      {error ? (
        <>
          <h2>No existe este cocktail</h2>
          <img
            src="https://w7.pngwing.com/pngs/629/832/png-transparent-cocktail-glass-martini-margarita-drink-cocktail-glass-angle-food-thumbnail.png"
            alt="Placeholder Cocktails"
          />
        </>
      ) : (
        <section className="result">
          {cocktails.map((item) => (
            <div key={item.idDrink}>
              <h3>{item.strDrink}</h3>
              <img src={item.strDrinkThumb} alt={item.strDrink} />
              <h4>{item.strCategory}</h4>
              <h4>{item.strInstructions}</h4>
              
            </div>
          ))}
        </section>
      )}

    </main>
  );
};

export default About;
