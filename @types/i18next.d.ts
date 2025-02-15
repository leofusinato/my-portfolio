import resources from "../src/locales/resources";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "landingPage";
    resources: typeof resources;
  }
}
