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

export const getSuggestedSymptoms = (ids, age, sex) => infermedica.post('suggest', { selected: ids, age, sex });

export const getDiagnosis = (symptoms, age, sex) => infermedica.post('diagnosis', { age, sex, evidence: symptoms });

export const getConditions = () => infermedica.get('conditions');

export const explain = (evidence, age, sex) => infermedica.post('explain', { age, sex, evidence });