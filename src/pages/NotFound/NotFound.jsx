import "./NotFound.css";

const NotFound = () => {
  return (
  <main>
    <div className="not-found">
      <h2>Página no encontrada</h2>
      <p>La página que estás buscando no existe.</p>
      <a href="/">Volver a la página principal</a>
    </div>
  </main>);
};

export default NotFound;
