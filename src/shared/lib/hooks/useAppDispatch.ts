import { AppDispatch } from '@/app/providers/Redux';
import { useDispatch } from 'react-redux';



export const useAppDispatch = () => useDispatch<AppDispatch>();