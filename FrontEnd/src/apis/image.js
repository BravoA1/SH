const API_IMAGE = "/api/image";

export async function getImage(filename) {
  const response = await fetch(`${API_IMAGE}/${filename}`);
  if (response.ok) {
    return response;
  } else {
    throw new Error("api error");
  }
}
