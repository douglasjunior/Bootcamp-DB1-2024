import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Page not found!</h1>
      <Link to="/">Voltar para a home</Link>
    </div>
  )
};

export default NotFound;
