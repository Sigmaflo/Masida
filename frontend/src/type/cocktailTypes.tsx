// 기본적인 칵테일 정보
export type cocktailType = {
  cocktail_id : number;
  cocktail_name_ko : string;
  cocktail_name_en  :string;
  cocktail_img : string;
  cocktail_likes : number;
  cocktail_rating : number;
  cocktail_difficulty : string;
};

// 레시피 object
export type recipeType = {
  recipe_num: number;
  recipe_content: string;
};

// 재료 object
export type ingredientType = {
  ingredient_name: string;
  ingredient_amount: string;
  ingredient_unit: string;
};

export type garnishType = {
  garnish_name : string;
}

// 칵테일 상세 정보 props
export type detail_props = {
  cocktail_id: number;
  cocktail_name_ko: string;
  cocktail_name_en: string;
  cocktail_img: string;
  cocktail_content: string;
  cocktail_difficulty: string;
  cocktail_rating: number;
  cocktail_likes: number;
  cocktail_comments: number;
  likes_checker: boolean;
  bookmark_checker: boolean;
  glass: string;
  base : string;
  garnish : garnishType[];
  recipe: recipeType[];
  ingredient: ingredientType[];
};

// 마이페이지 칵테일 추천...
export type cocktail_recommend = {
  cocktail_id: number;
  cocktail_name_ko: string;
  cocktail_img: string;
}

// 마이페이지 칵테일 데이터
export type cocktail_summary_data = {
  x: string;
  y: number;
}

// 마이페이지 요약본 데이터
export type cocktail_summary = {
  id: string;
  data: cocktail_summary_data[];
}