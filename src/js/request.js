import loaderToggle from "./loader";

const request = async (resourse) => {
  loaderToggle(true);
  const req = await fetch(resourse);

  if (!req.ok) {
    throw new Error("something went wrong");
  }
    loaderToggle(false)

  const data = await req.json();

  return data;
};

export default request;