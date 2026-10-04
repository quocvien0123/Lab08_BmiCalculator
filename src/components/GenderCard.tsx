import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Gender } from '../types/bmi';

interface GenderCardProps {
  gender: Gender;
  selected: boolean;
  onSelect: () => void;
}

export function GenderCard({ gender, selected, onSelect }: GenderCardProps) {
  const isMale = gender === 'male';
  const label = isMale ? 'MALE' : 'FEMALE';
  const symbol = isMale ? '♂' : '♀';

  return (
    <Pressable
      onPress={onSelect}
      style={({ pressed }) => [
        styles.card,
        selected ? styles.cardSelected : styles.cardUnselected,
        pressed && styles.cardPressed,
      ]}
    >
      <Text style={[styles.symbol, selected && styles.symbolSelected]}>
        {symbol}
      </Text>
      <Text style={[styles.label, selected && styles.labelSelected]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 2,
  },
  cardSelected: {
    backgroundColor: '#1E293B',
    borderColor: '#38BDF8', // Sky-400
  },
  cardUnselected: {
    backgroundColor: '#0F172A',
    borderColor: '#1E293B',
  },
  cardPressed: {
    transform: [{ scale: 0.97 }],
  },
  symbol: {
    fontSize: 32,
    fontWeight: '800',
    color: '#64748B',
    marginBottom: 4,
  },
  symbolSelected: {
    color: '#38BDF8',
  },
  label: {
    fontSize: 14,
    fontWeight: '800',
    color: '#94A3B8',
    letterSpacing: 1.5,
  },
  labelSelected: {
    color: '#F8FAFC',
  },
});
