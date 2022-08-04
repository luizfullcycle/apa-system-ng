import { KeycloakOptions, KeycloakService } from 'keycloak-angular';

export function initialize(keycloak: KeycloakService): () => Promise<boolean> {
   const options: KeycloakOptions = {
    config: {
      clientId: "apa-system-front",
      realm: "apa-system",
      url: "http://localhost:8080/auth"
    },
    loadUserProfileAtStartUp: true,
    initOptions: {
      onLoad: "login-required",
      checkLoginIframe: false
    },
    bearerExcludedUrls: []
  }
  return () => keycloak.init(options)
}
