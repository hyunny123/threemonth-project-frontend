const BASE_URL = "https://threemonths.shop";

export const USER_TOKEN = localStorage.getItem("token");
export const USER_NICKNAME = localStorage.getItem("nickname");

export const API = {
  //main
  MAIN_DETAILLIST: `${BASE_URL}/products`,
  MAIN_GRID: `${BASE_URL}/products/independentimages?page=main&place=grid`,
  MAIN_CAROUSEL: `${BASE_URL}/products/independentimages?page=main&place=carousel`,

  // login
  KAKAOLOGIN: `${BASE_URL}/users/kakaologin`,

  //individual page
  ITEM_GET: `${BASE_URL}/products`,

  // edit form
  GET_FORM_EDIT_DATA: `${BASE_URL}/orders`,

  CAFE_EDIT_GET: `${BASE_URL}/products?fields=product_name,id&category=bread`,
  FORM_EDIT_PATCH: `${BASE_URL}/orders`,

  //input form
  POST_INPUT_FORM: `${BASE_URL}/orders/`,

  GET_PACKAGE_FORM_DATA: `${BASE_URL}/products?category=bread`,
  GET_CAKE_FORM_DATA: `${BASE_URL}/products?category=cake`,

  CAFE_INPUT_GET: `${BASE_URL}/products?fields=product_name,id&category=bread`,

  //detail form
  DETAIL_FORM: `${BASE_URL}/orders/`,

  //formlist
  FORM_LIST: `${BASE_URL}/orders/`,

  //qnaList
  QNA_LIST: `${BASE_URL}/announcements/QnA`,
  FAQ_LIST: `${BASE_URL}/announcements/FAQ`,

  // GET Cake Review
  GET_CAKE_REVIEW: `${BASE_URL}/orders/reviews?type=cake`,

  // GET Package Review
  GET_PACKAGE_REVIEW: `${BASE_URL}/orders/reviews?type=package`,

  // My Page
  MY_ORDER_LIST: `${BASE_URL}/orders/userorders?all=True`,
  MY_REVIEWABLE_LIST: `${BASE_URL}/orders/userorders`,
  MY_REVIEW_LIST: `${BASE_URL}/orders/reviews?user_review=True`,

  REVIEW_EDIT: `${BASE_URL}/orders/reviews`,

  NOTICE_GET: `${BASE_URL}/announcements/notices`,
};
