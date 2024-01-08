'use client'
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
    const res = await getData('/api/paints');
    console.log('res',res)
    setPaints(res);
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

