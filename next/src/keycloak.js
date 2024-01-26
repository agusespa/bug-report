import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8001/auth',
  realm: 'ecom',
  clientId: 'ecom',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;

