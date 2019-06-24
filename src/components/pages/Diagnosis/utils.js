import { filter, includes, map, reject } from 'lodash';

const getBmiRiskFactors = (height, weight) => {
    const bmi = height / weight;
  
    if (bmi > 30) {
      return [
        { id: "p_6", name: 'BMI below 19', choice_id: "absent", initial: true},
        { id: "p_7", name: 'BMI above 30', choice_id: "present", initial: true },
     ];
    }
  
    if (bmi < 19) {
      return [
        { id: "p_6", name: 'BMI below 19', choice_id: "present", initial: true },
        { id: "p_7", name: 'BMI above 30', choice_id: "absent", initial: true},
     ];
    }
  
    return [
      { id: "p_6", name: 'BMI below 19', choice_id: "absent", initial: true},
      { id: "p_7", name: 'BMI above 30', choice_id: "absent", initial: true},
    ];
  };
  
const getAgeRiskFactors = (age) => {
    if (age < 18) {
      return [
         { id: "p_65", name: 'Age < 18', choice_id: "present", initial: true},
         { id: "p_3", name: 'Age above 40', choice_id: "absent", initial: true},
         { id: "p_4", name: 'Age 45-55', choice_id: "absent", initial: true},
         { id: "p_5", name: 'Age above 60', choice_id: "absent", initial: true},
      ];
    }
   
    if (age >= 18 && age <= 40) {
      return [
         { id: "p_65", name: 'Age < 18', choice_id: "absent", initial: true},
         { id: "p_3", name: 'Age above 40', choice_id: "absent", initial: true},
         { id: "p_4", name: 'Age 45-55', choice_id: "absent", initial: true},
         { id: "p_5", name: 'Age above 60', choice_id: "absent", initial: true},
      ];
    }
  };
  
  export const getRiskFactorsToSelectFrom = (riskFactors, sex, commonRisks) => {
    const idsAlwaysExcluded = ['p_1', 'p_2', 'p_3', 'p_4', 'p_5', 'p_6', 'p_7', 'p_65', 'p_230'];
    const idsExcludedAcordingToSex = map(filter(riskFactors, (factor) => factor.sex_filter === sex), 'id');
    const commonRisksIds = map(commonRisks, 'id');
  
    const factorIdsToExclude = [
      ...idsAlwaysExcluded,
      ...idsExcludedAcordingToSex,
      ...commonRisksIds,
    ];
  
    return reject(riskFactors, (factor) => includes(factorIdsToExclude, factor.id));
  };

  export const getRiskFactorsFromProfile = (profileData) => ([
    ...reject(
      profileData.commonRisks,
      (commonRisk) => commonRisk.choice_id === 'unknown',
    ),
    ...getBmiRiskFactors(profileData.height, profileData.weight),
    ...getAgeRiskFactors(profileData.age),
  ]);
  