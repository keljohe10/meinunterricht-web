import MockAdapter from 'axios-mock-adapter';
import Client from '@/lib/axios';

const axios = Client();

const mockAdapter = new MockAdapter(axios);

beforeEach(() => {
  mockAdapter.reset();
});

export default mockAdapter;
