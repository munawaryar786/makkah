import { seasonalOffers } from "./seasonalOffers";
import { umrahPackages, type UmrahPackage } from "./umrahPackages";

export type Package = UmrahPackage;
export const packages: Package[] = [...umrahPackages, ...seasonalOffers];
export { facilities } from "./umrahPackages";
