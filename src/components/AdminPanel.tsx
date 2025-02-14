import React, { useEffect } from 'react';

declare global {
  interface Window {
    CMS: any;
  }
}

const AdminPanel = () => {
  useEffect(() => {
    // Verificăm dacă CMS este disponibil pe window
    if (window.CMS) {
      window.CMS.init();  // Inițializăm Netlify CMS
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Admin Panel</h1>
    </div>
  );
};

export default AdminPanel;
