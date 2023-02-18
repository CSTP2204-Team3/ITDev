import axios from 'axios';

const loginHandler = async (username: string, password: string) => {
  try {
    const response = await axios.post('/api/login.ts', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default loginHandler;