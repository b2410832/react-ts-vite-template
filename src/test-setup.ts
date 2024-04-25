import '@testing-library/jest-dom';
import initI18n from './i18n';

beforeAll(async () => {
  await initI18n();
});
