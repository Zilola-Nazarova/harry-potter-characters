import { useParams } from 'react-router';
import Icon from '../components/Icon';
import Gfs from '../components/Gfs';

const Models = () => {
  const { id } = useParams();

  return (
    (id === 'icon') ? <Icon /> : <Gfs />
  );
};

export default Models;
