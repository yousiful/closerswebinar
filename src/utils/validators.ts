import { ValidationError } from './apiErrorHandler';

export interface ValidationRule<T = string> {
  validate: (value: T) => boolean;
  message: string;
}

export function validateEmail(email: string): string | null {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return 'Email is required';
  }

  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }

  return null;
}

export function validatePhone(phone: string): string | null {
  if (!phone) {
    return null;
  }

  const phoneRegex = /^[\d\s\-\+\(\)]+$/;

  if (!phoneRegex.test(phone)) {
    return 'Please enter a valid phone number';
  }

  if (phone.replace(/\D/g, '').length < 10) {
    return 'Phone number must be at least 10 digits';
  }

  return null;
}

export function validateRequired(value: string, fieldName: string = 'This field'): string | null {
  if (!value || value.trim().length === 0) {
    return `${fieldName} is required`;
  }
  return null;
}

export function validateMinLength(value: string, minLength: number, fieldName: string = 'This field'): string | null {
  if (value.length < minLength) {
    return `${fieldName} must be at least ${minLength} characters`;
  }
  return null;
}

export function validateMaxLength(value: string, maxLength: number, fieldName: string = 'This field'): string | null {
  if (value.length > maxLength) {
    return `${fieldName} must be no more than ${maxLength} characters`;
  }
  return null;
}

export function validateForm<T extends Record<string, unknown>>(
  data: T,
  rules: Partial<Record<keyof T, ValidationRule<T[keyof T]>[]>>
): { isValid: boolean; errors: Partial<Record<keyof T, string>> } {
  const errors: Partial<Record<keyof T, string>> = {};

  for (const field in rules) {
    const fieldRules = rules[field];
    const value = data[field];

    if (fieldRules) {
      for (const rule of fieldRules) {
        if (!rule.validate(value)) {
          errors[field] = rule.message;
          break;
        }
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function throwValidationError(
  message: string,
  fields?: Record<string, string>
): never {
  throw new ValidationError(message, fields);
}
