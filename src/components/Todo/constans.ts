import { faker } from "@faker-js/faker";
import { formatRandomDate } from "../../helpers/formatRandomDate";

export const RANDOM_TEXT = faker.lorem.text();
export const RANDOM_START_DATE = formatRandomDate(faker.date.future());
export const RANDOM_END_DATE = formatRandomDate(faker.date.future());