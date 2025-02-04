import { defRequest } from '../utils/request';

const getDefaultRoot = (params: any) => {
  return defRequest.get('/', params, {
    showLoading: true,
    timeout: 1000,
  });
};

export { getDefaultRoot };
