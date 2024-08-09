
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllCourses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses', error);
    throw error;
  }
};
