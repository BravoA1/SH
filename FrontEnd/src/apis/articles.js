const API_ARTICLES = '/api/articles';

export async function getArticles(){
    const response = await fetch(`${API_ARTICLES}/getArticles`);
    const backResponse = await response.json();
    // console.log(backResponse);
    if(response.ok){
        return backResponse;
    }else{
        if(backResponse){
            throw backResponse;
        }else{
            throw new Error('API error');
        }
    }
}

export async function getArticlesByGender(gender){
    const response = await fetch(`${API_ARTICLES}/getArticlesByGender${gender}`);
    const backResponse = await response.json();
    // console.log(backResponse);
    if(response.ok){
        return backResponse;
    }else{
        if(backResponse){
            throw backResponse;
        }else{
            throw new Error('API error');
        }
    }
}