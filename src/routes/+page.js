import * as json from "../data/data.json";

export const load = async ({ params }) => {
  return { emogis: json.emojis };
};
