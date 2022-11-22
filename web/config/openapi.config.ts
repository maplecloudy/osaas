const { generateService } = require('@umijs/openapi');
const apiHost = 'https://www.osrc.com';
generateService({
  requestLibPath: "import { request } from '@/config';",
  //   schemaPath: 'http://petstore.swagger.io/v2/swagger.json',
  projectName: 'osrt',
  schemaPath: `${apiHost}/api/openapis?apiDocUrls=${apiHost}/api/v3/api-docs&resetTag=OsrtOpenAPI`,
  serversPath: './src/services',
});
