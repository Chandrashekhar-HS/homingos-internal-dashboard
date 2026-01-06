import dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

const TEST_ENVIRONMENT = process.env.TEST_ENVIRONMENT;

if (!TEST_ENVIRONMENT) {
  throw new Error(
    'TEST_ENVIRONMENT is not defined, please set it in your .env file'
  );
}

async function globalSetup() {
  console.log(`Running tests in ${TEST_ENVIRONMENT} environment`);
  dotenv.config({ path: `./config/${TEST_ENVIRONMENT}.env` });

  // Create environment.properties for Allure reporting
  const allureResultsDir = path.join(process.cwd(), 'allure-results');
  if (!fs.existsSync(allureResultsDir)) {
    fs.mkdirSync(allureResultsDir, { recursive: true });
  }

  const envProperties = [
    `Environment=${TEST_ENVIRONMENT}`,
    `BaseURL=${process.env.BASE_URL || 'https://instant.flamapp.ai/'}`,
    `Browser=Chrome`,
    `NodeVersion=${process.env.npm_config_node_version || '22'}`,
  ].join('\n');

  fs.writeFileSync(path.join(allureResultsDir, 'environment.properties'), envProperties);
}

export default globalSetup;
