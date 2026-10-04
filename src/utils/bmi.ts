import { BMICategory, BMIResult } from '../types/bmi';

export const calculateBMI = (
  heightCm: number,
  weightKg: number
): number | null => {
  if (
    heightCm <= 0 ||
    weightKg <= 0 ||
    isNaN(heightCm) ||
    isNaN(weightKg) ||
    !isFinite(heightCm) ||
    !isFinite(weightKg)
  ) {
    return null;
  }
  const heightMeters = heightCm / 100;
  const bmiRaw = weightKg / (heightMeters * heightMeters);
  if (!isFinite(bmiRaw) || isNaN(bmiRaw) || bmiRaw <= 0) {
    return null;
  }
  return Math.round(bmiRaw * 10) / 10;
};

export const getBMICategory = (bmi: number): BMICategory => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
};

export const getBMIResultDetails = (bmi: number): BMIResult => {
  const category = getBMICategory(bmi);
  switch (category) {
    case 'Underweight':
      return {
        bmi,
        category,
        message: 'Your body weight is lower than normal. Focus on nutrient-rich meals and healthy calories.',
        color: '#38BDF8', // Sky Blue
      };
    case 'Normal':
      return {
        bmi,
        category,
        message: 'Your BMI is within the normal healthy range. Keep up the great lifestyle!',
        color: '#10B981', // Emerald Green
      };
    case 'Overweight':
      return {
        bmi,
        category,
        message: 'Your body weight is slightly higher than normal. Regular cardio and balanced meals are advised.',
        color: '#F59E0B', // Amber
      };
    case 'Obese':
      return {
        bmi,
        category,
        message: 'Your BMI indicates obesity. Prioritize healthy habits and consult a healthcare professional.',
        color: '#EF4444', // Red
      };
  }
};
