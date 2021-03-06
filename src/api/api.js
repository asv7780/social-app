import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "f5f2be0c-0ce5-4346-aac3-376cc05523a0"
  }
});

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    console.warn('Use old method from profileApi');
    return profileApi.getProfile(userId);
  }
};
export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, {status: status});
  }
};

export const authApi = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password,rememberMe) {
    return instance.post(`auth/login`, {email, password,rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  }
};

