'use client';

import { useEffect, useState } from 'react';

export const useColumns = () => {
  const [columns, setColumns] = useState(3);
  useEffect(() => {
    const savedColumns = localStorage.getItem('galleryColumns');
    setColumns(savedColumns ? Number.parseInt(savedColumns) : 3);
  }, []);

  const toggleColumns = () => {
    setColumns(prev => (prev === 3 ? 5 : 3));
    localStorage.setItem('galleryColumns', columns === 3 ? '5' : '3');
  };

  const gridColumns =
    columns === 3 ? 'md:grid-cols-3 md:auto-rows-20px' : 'md:grid-cols-5 md:auto-rows-10px';

  return { columns, toggleColumns, gridColumns };
};
