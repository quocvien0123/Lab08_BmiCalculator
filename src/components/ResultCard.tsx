import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { BMIResult } from '../types/bmi';

interface ResultCardProps {
  result: BMIResult;
  onRecalculate: () => void;
}

export function ResultCard({ result, onRecalculate }: ResultCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Result</Text>

      <View style={styles.card}>
        {/* Category Label */}
        <Text style={[styles.category, { color: result.color }]}>
          {result.category.toUpperCase()}
        </Text>

        {/* Large BMI Number */}
        <Text style={styles.bmiNumber}>{result.bmi.toFixed(1)}</Text>

        {/* Normal BMI Reference Range */}
        <View style={styles.rangeBox}>
          <Text style={styles.rangeLabel}>Normal BMI range:</Text>
          <Text style={styles.rangeValue}>18.5 - 24.9 kg/m²</Text>
        </View>

        {/* Descriptive Health Message */}
        <Text style={styles.message}>{result.message}</Text>
      </View>

      {/* Recalculate Button */}
      <Pressable
        onPress={onRecalculate}
        style={({ pressed }) => [
          styles.recalculateButton,
          pressed && styles.recalculateButtonPressed,
        ]}
      >
        <Text style={styles.recalculateButtonText}>CALCULATE AGAIN</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 1.5,
    textAlign: 'center',
    marginBottom: 12,
  },
  card: {
    flex: 1,
    backgroundColor: '#1E293B',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#334155',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
    marginVertical: 12,
  },
  category: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 16,
  },
  bmiNumber: {
    fontSize: 64,
    fontWeight: '900',
    color: '#FFFFFF',
    lineHeight: 70,
    marginBottom: 16,
  },
  rangeBox: {
    alignItems: 'center',
    marginBottom: 20,
  },
  rangeLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 2,
  },
  rangeValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#94A3B8',
  },
  message: {
    fontSize: 15,
    fontWeight: '600',
    color: '#CBD5E1',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 12,
  },
  recalculateButton: {
    backgroundColor: '#E11D48', // Rose Red
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#E11D48',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
    marginTop: 12,
  },
  recalculateButtonPressed: {
    transform: [{ scale: 0.98 }],
    backgroundColor: '#BE123C',
  },
  recalculateButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 2,
  },
});
