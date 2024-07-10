// src/hooks/useProfile.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const useProfile = (userId) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${userId}`); // Substitua pela rota correta do seu backend
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  return { profile, loading, error };
};

export default useProfile;
