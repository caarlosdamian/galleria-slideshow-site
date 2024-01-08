export const getData = async (url: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_API_ENDPOINT || 'http://localhost:3000' }${url}`);
    const body = await res.json();
    return body;
  } catch (error) {
    console.log(error);
  }
};
