import { ReactNode } from 'react';
import { RouteObject } from 'react-router';

export const injectErrorBoundary = (data: RouteObject[], errorElement: ReactNode) => {
  const routes = [...data];

  for (const route of routes) {
    route.errorElement = errorElement;
  }

  return data;
};

export const validatePhoneNumber = (_: unknown, value: string) => {
  switch (true) {
    case !value:
      return Promise.reject(new Error('Please input your phone number'));
    case !/^\d+$/.test(value):
      return Promise.reject(new Error('Phone number should include only numbers'));
    default:
      return Promise.resolve();
  }
};

export const validatePassword = (_: unknown, value: string) => {
  const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_+*&#!.@])[a-zA-Z0-9-_+*&#!.@]{7,}$/;

  if (!regex.test(value)) {
    return Promise.reject(new Error('Please input a valid password'));
  } else {
    return Promise.resolve();
  }
};

export const validateAtLeastOneCharacter = (_: unknown, value: string) => {
  if (!value || value.trim().length < 1) {
    return Promise.reject();
  }
  return Promise.resolve();
};

export const formatAmount = (value: number, decimalPlaces: number = 0, currency: string = 'ngn'): string => {
  if (!Number(value)) return '0';

  const { format } = Intl.NumberFormat('en-US', {
    currency,
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: decimalPlaces,
  });

  return format(value);
};
