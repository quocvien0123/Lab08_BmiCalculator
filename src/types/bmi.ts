export type Gender = 'male' | 'female';

export type BMICategory = 'Underweight' | 'Normal' | 'Overweight' | 'Obese';

export interface BMIResult {
  bmi: number;
  category: BMICategory;
  message: string;
  color: string;
}
