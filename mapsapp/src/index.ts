import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

const customMap = new Map("map");

customMap.addMarker(new Company());
customMap.addMarker(new User());
