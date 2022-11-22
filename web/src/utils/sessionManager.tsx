import {getUserInfo as getUserInfoFromReq} from "services/osrt/OsrtOpenAPI";

const TOKEN_NAME = 'authToken';
const REFRESH_TOKEN = 'refreshToken';
const EXPIRED_TIME = 'expiresIn';
const USERINFO_NAME = 'userinfo';

let fingerprint: any = null;

function setFingerprint(finger : string) {
  fingerprint = finger;
}

function getFingerprint(): string {
  return fingerprint;
}

function isAuthed(): boolean {
  let token = localStorage.getItem(TOKEN_NAME);
  let userInfo = localStorage.getItem(USERINFO_NAME);
  let expiredTime = localStorage.getItem(EXPIRED_TIME);
  return !(token == null || userInfo == null || Number.parseInt(expiredTime) < new Date().getTime());
}

function getAccessToken(): string {
  return localStorage.getItem(TOKEN_NAME);
}

function getToken() {
  return {
    'accessToken': localStorage.getItem(TOKEN_NAME),
    'refreshToken': localStorage.getItem(REFRESH_TOKEN)
  };
}

function saveToken(token: API.Token) {
  localStorage.setItem(TOKEN_NAME, token.accessToken);
  if (token.refreshToken) {
    localStorage.setItem(REFRESH_TOKEN, token.refreshToken);
  }
  if (token.expiresIn) {
    let expiresIn = new Date().getTime() + token.expiresIn * 1000;
    localStorage.setItem(EXPIRED_TIME, expiresIn.toString());
  }
}

function clearAuth() {
  localStorage.removeItem(TOKEN_NAME);
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem(USERINFO_NAME);
  localStorage.removeItem(EXPIRED_TIME)
}

function saveUserinfo(newUserinfo: any) {
  if (newUserinfo == null) {
    return;
  }
  localStorage.setItem(USERINFO_NAME, JSON.stringify(newUserinfo));
}

async function refreshUserInfo() {
  const res = await getUserInfoFromReq();
  saveUserinfo(res);
  Promise.resolve();
}

function getUserInfo(): any {
  let userinfo = localStorage.getItem(USERINFO_NAME);
  if (userinfo == null) {
    return null;
  }
  return JSON.parse(userinfo);
}

export const sessionManager = {
  saveToken, clearAuth, isAuthed, getAccessToken, saveUserinfo, refreshUserInfo, getUserInfo,
  getToken, getFingerprint, setFingerprint
};
