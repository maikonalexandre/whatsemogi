import * as json from "../../data/data.json";

export const load = async () => {
  return { emogis: json.emojis };
};
