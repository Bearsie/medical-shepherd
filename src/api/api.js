import axios from 'axios';

const infermedica = axios.create({
  baseURL: 'https://api.infermedica.com/v2/',
  headers: {
    'App-Id': process.env.REACT_APP_API_APP_ID,  // eslint-disable-line no-undef
    'App-Key': process.env.REACT_APP_API_APP_KEY, // eslint-disable-line no-undef
    'Model': 'infermedica-en',
    'Content-Type': 'application/json',
    'Interview-Id': null,
  },
});

export const getSymptoms = () => infermedica.get('symptoms');

export const getRiskFactors = () => infermedica.get('risk_factors');

export const parse = (text) => infermedica.post('parse', { text });

export const getSuggestedSymptoms = (data) => infermedica.post('suggest', data);

export const diagnosis = (data) => infermedica.post('diagnosis', data);

export const explain = (data) => infermedica.post('explain', data);