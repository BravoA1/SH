const API_ARTICLES = "/api/material";

export async function getMaterial(id) {
  const obj_id = { id }
  const response = await fetch(`${API_ARTICLES}`, {
    method: "POST",
    body: JSON.stringify(obj_id),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const backResponse = await response.json();
  // console.log(backResponse);
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("API error");
    }
  }
}
