import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "<rootDir>/jsdom.mocks.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.ts",
    '^@quen-ui/helpers$': '<rootDir>/packages/helpers/src',
    '^@quen-ui/theme$': '<rootDir>/packages/theme/src',
    '^@quen-ui/hooks': '<rootDir>/packages/hooks/src'
  },
};

export default config;
