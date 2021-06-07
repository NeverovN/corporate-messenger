const DEV_SERVER_DOMAIN = 'localhost:3000';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PROD_SERVER_DOMAIN = ''; // TODO: provide deployed server link

const SERVER_DOMAIN = DEV_SERVER_DOMAIN; // TODO: choose different urls based on active env

export const BASE_HTTP_URL = `http://${SERVER_DOMAIN}/graphql`;
export const BASE_WS_URL = `ws://${SERVER_DOMAIN}/graphql`;
