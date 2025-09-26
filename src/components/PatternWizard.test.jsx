import { render, screen, fireEvent } from '@testing-library/react';
import PatternWizard from './PatternWizard';

// Helper to get the Next button
const getNextButton = () => screen.getByRole('button', { name: /next/i });

// Test: Next button enables when measurements are entered
it('enables Next button when measurements are entered', () => {
  render(<PatternWizard />);

  // Should be disabled initially
  expect(getNextButton()).toBeDisabled();

  // Enter measurements
  fireEvent.change(screen.getByLabelText(/shoulder to elbow/i), { target: { value: '13' } });
  fireEvent.change(screen.getByLabelText(/shoulder to wrist/i), { target: { value: '24' } });

  // Should be enabled now
  expect(getNextButton()).not.toBeDisabled();
});

// Test: Unit toggle changes inches/cm text
it('changes unit text when toggled', () => {
  render(<PatternWizard />);

  // Default is inches
  expect(screen.getByText(/shoulder to elbow \(inches\)/i)).toBeInTheDocument();
  expect(screen.getByText(/shoulder to wrist \(inches\)/i)).toBeInTheDocument();

  // Find and click the toggle button
  const toggle = screen.getAllByRole('button').find(btn => btn.className.includes('rounded-full'));
  fireEvent.click(toggle);

  // Now should show cm
  expect(screen.getByText(/shoulder to elbow \(cm\)/i)).toBeInTheDocument();
  expect(screen.getByText(/shoulder to wrist \(cm\)/i)).toBeInTheDocument();
});

