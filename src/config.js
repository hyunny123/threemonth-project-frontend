const BASE_URL = "http://15.164.163.31:8001";

export const USER_TOKEN = localStorage.getItem("token");
export const USER_NICKNAME = localStorage.getItem("nickname");

export const API = {
  //main
  MAIN_DETAILLIST: `${BASE_URL}/products`,
  MAIN_GRID: `${BASE_URL}/products/independentimages?page=main&place=grid`,
  MAIN_CAROUSEL: `${BASE_URL}/products/independentimages?page=main&place=carousel`,

  // detailpage
  PACKAGEDETAIL: `${BASE_URL}/packagedetail`,
  INDIVIDUALDETAIL: `${BASE_URL}/individualdetail`,

  // login
  KAKAOLOGIN: `${BASE_URL}/users/kakaologin`,
  KAKAOLOGOUT: `${BASE_URL}/users/kakaologout`,

  //form data
  FORMLIST: `${BASE_URL}/formlist`,
  FORMDETAIL: `${BASE_URL}/formdetail`,

  // inputpage
  CAFEINPUT: `${BASE_URL}/cafeinputform`,
  PACKAGEINPUT: `${BASE_URL}/packageinputform`,
  CAKEINPUT: `${BASE_URL}/cakeinputform`,

  // admin
  ADMINPAGE: `${BASE_URL}/adminpage`,
};
