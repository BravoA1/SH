const API_COMMENT = "/api/comment";


export async function createComment(score, userId, id, currentDate, comment) {
  console.log("test");
    const response = await fetch(`${API_COMMENT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          score,
          userId,
          id,
          currentDate,
          comment
        }), 
      });

	const backResponse = await response.json();
	if (response.ok) {
    console.log('test2');
		return backResponse;
	} else {
		if (backResponse) {
			throw backResponse;
		} else {
      console.log('test3');
			throw new Error("Error Api Create Comment");
		}
	}
}
