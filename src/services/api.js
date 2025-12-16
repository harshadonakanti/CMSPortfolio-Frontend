const API = import.meta.env.VITE_API_URL;

// ABOUT
export const fetchAbout = async () => {
  const res = await fetch(`${API}/api/about`);
  return res.json();
};

// USER INFO
export const fetchUserInfo = async () => {
  const res = await fetch(`${API}/api/userinfo`);
  return res.json();
};

// IMAGE URL HELPER (optional but clean)
export const getImageUrl = (imageName) => {
  return `${API}/uploads/${imageName}`;
};
