'use client';
import { getData } from '@/services';
import { PaintI } from '@/types';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export const GalleryContext = createContext<[] | PaintI[]>([]);

export const GalleryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [paints, setPaints] = useState([]);
  const getInfo = async () => {
    const local = await localStorage.getItem('paints');
    if (!local) {
      const res = await getData('/api/paints');
      localStorage.setItem('paints', JSON.stringify(res));
      setPaints(res);
    } else {
      setPaints(JSON.parse(local));
    }
  };
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <GalleryContext.Provider value={paints}>{children}</GalleryContext.Provider>
  );
};

export const useGalleryContext = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('Context should be under a gallery context provider');
  }
  return context;
};
