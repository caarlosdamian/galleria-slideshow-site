export const getData = async (url: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_API_ENDPOINT}${url}`);
    const body = await res.json();
    return body;
  } catch (error) {
    console.log(error);
  }
};
