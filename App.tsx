import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Platform,
  StatusBar as RNStatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import { Gender, BMIResult } from './src/types/bmi';
import { calculateBMI, getBMIResultDetails } from './src/utils/bmi';
import { GenderCard } from './src/components/GenderCard';
import { NumberInputCard } from './src/components/NumberInputCard';
import { ResultCard } from './src/components/ResultCard';

export default function App() {
  const [gender, setGender] = useState<Gender>('male');
  const [height, setHeight] = useState<string>('170');
  const [weight, setWeight] = useState<string>('65');
  const [age, setAge] = useState<string>('20');
  const [result, setResult] = useState<BMIResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    const h = parseFloat(height.trim());
    const w = parseFloat(weight.trim());

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      setError('Please enter valid height (> 0) and weight (> 0).');
      return;
    }

    const calculatedBmi = calculateBMI(h, w);
    if (calculatedBmi === null) {
      setError('Invalid calculation. Please check your numbers.');
      return;
    }

    setError(null);
    const details = getBMIResultDetails(calculatedBmi);
    setResult(details);
  };

  const handleRecalculate = () => {
    setResult(null);
    setError(null);
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <StatusBar style="light" />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.appTitle}>BMI Calculator</Text>
        </View>

        {/* Main Content: Form or Result */}
        <View style={styles.body}>
          {result ? (
            <ResultCard result={result} onRecalculate={handleRecalculate} />
          ) : (
            <ScrollView
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              {/* Gender Selector Row */}
              <View style={styles.genderRow}>
                <GenderCard
                  gender="male"
                  selected={gender === 'male'}
                  onSelect={() => setGender('male')}
                />
                <GenderCard
                  gender="female"
                  selected={gender === 'female'}
                  onSelect={() => setGender('female')}
                />
              </View>

              {/* Height Input Card */}
              <NumberInputCard
                label="Height"
                unit="cm"
                value={height}
                onChangeText={(val) => {
                  setHeight(val);
                  if (error) setError(null);
                }}
                placeholder="170"
              />

              {/* Weight Input Card */}
              <NumberInputCard
                label="Weight"
                unit="kg"
                value={weight}
                onChangeText={(val) => {
                  setWeight(val);
                  if (error) setError(null);
                }}
                placeholder="65"
              />

              {/* Age Input Card */}
              <NumberInputCard
                label="Age"
                unit="years"
                value={age}
                onChangeText={(val) => {
                  setAge(val);
                  if (error) setError(null);
                }}
                placeholder="20"
              />

              {/* Error Message */}
              {error && (
                <View style={styles.errorBox}>
                  <Text style={styles.errorText}>⚠ {error}</Text>
                </View>
              )}

              {/* Calculate Button */}
              <Pressable
                onPress={handleCalculate}
                style={({ pressed }) => [
                  styles.calculateButton,
                  pressed && styles.calculateButtonPressed,
                ]}
              >
                <Text style={styles.calculateButtonText}>CALCULATE</Text>
              </Pressable>
            </ScrollView>
          )}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.studentName}>Nguyễn Anh Tuấn- 23IT297</Text>
          <Text style={styles.studentClass}>Lớp: 23SE2 • Lab 08 - BMI Calculator</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // Slate-900
    paddingTop: Platform.OS === 'android' ? (RNStatusBar.currentHeight ?? 0) : 0,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 8,
  },
  appTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingVertical: 8,
  },
  genderRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  errorBox: {
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    borderWidth: 1,
    borderColor: '#EF4444',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  errorText: {
    color: '#FCA5A5',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
  calculateButton: {
    backgroundColor: '#E11D48', // Rose Red
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 8,
    shadowColor: '#E11D48',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
  calculateButtonPressed: {
    transform: [{ scale: 0.98 }],
    backgroundColor: '#BE123C',
  },
  calculateButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 2,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 14,
  },
  studentName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E2E8F0',
    letterSpacing: 0.5,
  },
  studentClass: {
    fontSize: 12,
    fontWeight: '500',
    color: '#94A3B8',
    marginTop: 2,
  },
});
