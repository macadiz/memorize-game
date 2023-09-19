export default {
  moduleFileExtensions: ["js", "ts", "tsx"],
  testEnvironment: "jsdom",
  transform: {
    ".*\\.(tsx?)$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  moduleDirectories: ["node_modules", "test"],
  setupFilesAfterEnv: ["./test/jest.setup.ts"],
};
