export const gitHubData = async () => {
  try {
    const response = await fetch(
      "https://gh-pinned-api.vercel.app/api?user=evans-costa",
    );
    const responseBody = await response.json();

    return responseBody;
  } catch (error) {
    throw new Error("Failure to get data.");
  }
};
