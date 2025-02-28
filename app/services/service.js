export const loginService = async (email, password) => {
  const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL;
  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    console.error('Error in loginService:', error);
    throw error;
  }
};
