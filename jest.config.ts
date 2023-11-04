import type {Config} from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testTimeout: 30000,
  detectOpenHandles: true,
  watchAll: false,
  testEnvironment: 'node',
  preset: 'ts-jest',
  testRegex: '/tests/.+\\.test\\.js$',
  moduleFileExtensions: ['js'],
  transform: {'^.+\\.js$': 'ts-jest'}
}
export default config
