import { baseAxios } from "./index";

function getSocialLoginLink(socialType) {
  return baseAxios.get("/api/auth/" + socialType + "/link");
}

function getAccessToken(socialType, tokenRequest) {
  return baseAxios.post("/api/auth/" + socialType + "/token", tokenRequest);
}

export { getSocialLoginLink, getAccessToken };
