import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <h2>Welcome to TheCocktailDB Router</h2>
      <img src="https://www.thecocktaildb.com/images/logo.png" alt="logo"></img>
      <div className="intro">
        <p>Los cócteles son una forma deliciosa y divertida de disfrutar de las bebidas alcohólicas.</p>
        <p>  En esta página, encontrarás una selección de recetas de cócteles clásicos y modernos.</p>
        <p>  Así como consejos para prepararlos y disfrutarlos al máximo. </p>
        <h2>Advertencia: El consumo de bebidas alcohólicas es nocivo para la salud.</h2>
        <img className="borra" src="https://cdn130.picsart.com/277956941016211.png" alt="Barney el borracho"></img>
      </div>
    </main>
  );
};

export default Home;