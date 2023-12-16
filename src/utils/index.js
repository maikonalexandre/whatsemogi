import { toast } from "svelte-sonner";

export const copyToClipboard = async (data) => {
  try {
    await navigator.clipboard.writeText(data);
  } catch (error) {
    console.log(error);
  }

  toast.success("Copied to clipboard!");
};

export const makeEmogi = (arr) => {
  const emoji = String.fromCodePoint(...arr.map((code) => parseInt(code, 16)));
  return emoji;
};
