import { storeToRefs } from 'pinia';
import { useUserStore } from '@store/modules/user';

const userStore = useUserStore();
const { token } = storeToRefs(userStore);

export const getToken = () => {
  return token;
};
