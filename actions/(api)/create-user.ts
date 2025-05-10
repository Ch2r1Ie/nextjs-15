"use server";

export const createUser = async (accessToken: string, providers: string) => {
  const url = `${process.env.BACKEND_DOMAIN}${process.env.REGISTER_PATH}`;

  const response = await fetch(url, { 
    
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      provider: providers,
    }),
  });

  if (!response.ok) {
    throw Error();
  }

  const data = await response.json();
  return data;
};
