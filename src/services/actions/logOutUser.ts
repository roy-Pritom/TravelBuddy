
import { AuthKey } from '@/constants';
import { deleteCookies } from './deleteCookies';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { removeFromLocalStorage } from '@/utils/localStorage';

export const logoutUser = (router: AppRouterInstance) => {
   removeFromLocalStorage(AuthKey);
   deleteCookies([AuthKey, 'refreshToken']);
   router.push('/');
   router.refresh();
};