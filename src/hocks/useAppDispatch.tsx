// hooks.ts
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

// Exporta un hook personalizado que utiliza AppDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
