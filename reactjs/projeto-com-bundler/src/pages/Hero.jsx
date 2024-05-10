import { useParams } from 'react-router-dom';

const Hero = () => {
  const params = useParams();
  return (
    <div>
      <h1>Hero: {params.heroId}</h1>
    </div>
  )
};

export default Hero;
