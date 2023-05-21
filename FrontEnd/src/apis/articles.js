const API_ARTICLES = '/api/articles';

export async function getArticles(){
    const response = await fetch(`${API_ARTICLES}/getArticles`);
    const backResponse = await response.json();
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

export async function getArticleById(id){
    const response = await fetch(`${API_ARTICLES}/getArticleById?id=${id}`);
    const backResponse = await response.json();
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

export async function getArticlesByGenderMan(){
    const response = await fetch(`${API_ARTICLES}/getArticlesByGenderMan`);
    const backResponse = await response.json();
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

export async function getArticlesByGenderWoman(){
    const response = await fetch(`${API_ARTICLES}/getArticlesByGenderWoman`);
    const backResponse = await response.json();
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

export async function getArticlesByGenderKid(){
    const response = await fetch(`${API_ARTICLES}/getArticlesByGenderKid`);
    const backResponse = await response.json();
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