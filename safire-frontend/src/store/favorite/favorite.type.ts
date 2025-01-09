import { ISafire } from "../../../types/safire";
import { InsuranceType } from "../insurance/insurance.type";

export interface IFavoriteState {
  favorites: InsuranceType[];
  addFavorite: (insurance: InsuranceType) => void;
  removeFavorite: (insurance: InsuranceType) => void;
}
