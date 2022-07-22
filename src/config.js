const BASE_URL = "http://15.164.163.31:8000";

export const API = {
  //main
  MAIN: `${BASE_URL}/main`,

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
