
export const API_URL = 'https://api.weekday.technology/adhoc/getSampleJdJSON';

export const getJobFetchOptions = (limit:any, offset:any, filters = {}) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    limit,
    offset,
  }),
});
