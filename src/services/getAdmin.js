import axios from 'axios';

const getAdmin = async () => {
  try {
    const response = await axios.get('https://cine-cupo.onrender.com/admin');
    console.log(response.data);
    return response.data;

  } catch (error) {
    console.error('Error fetching admin data:', error);
    return null;
  }
};

export default getAdmin;
