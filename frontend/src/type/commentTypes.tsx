export type commentType = {
  comment_id: number;
  comment_content: string;
  comment_rating: number;
  comment_create_date: string;
  comment_difficulty: string;
  user_name: string;
  user_profile: string;
  writer_checker: boolean;
};

// 마이 페이지 댓글 정보
export type mypageCommentType = {
  cocktail_id: number;
  cocktail_name_ko: string;
  cocktail_img: string;
  cocktail_difficulty_user: string;
  comment_content: string;
  comment_rating: number;
  comment_date: String;
};
