const API_CART = "/api/cart";

export async function addArticleToCart(idUser, idArticle, idSize, idColor) {
  const response = await fetch(`${API_CART}/addArticle`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idUser, idArticle, idSize, idColor }),
  });
  const backResponse = await response.json();
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

export async function getCart(idUser) {
  const response = await fetch(`${API_CART}/getCart?idUser=${idUser}`);
  const backResponse = await response.json();
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

export async function updateQuantityArticleInCart(idUser, idArticle, quantity) {
  const response = await fetch(`${API_CART}/updateArticleQuantity`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idUser, idArticle, quantity }),
  });
  const backResponse = await response.json();
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

export async function deleteArticleInCart(idArticle, idUser) {
  const response = await fetch(`${API_CART}/deleteArticle`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idArticle, idUser }),
  });
  const backResponse = await response.json();
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
