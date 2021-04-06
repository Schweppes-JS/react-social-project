import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationState } from "../types/state/authenticationState";
import { FetchRegisterAction } from "../types/actions/fetchRegisterAction";
import { SetCurrentUserAction } from "../types/actions/setCurrentUserAction";
import { RegisterFailureAction } from "../types/actions/registerFailureAction";
import { FetchLoginAction } from "../types/actions/fetchLoginAction";
import { LoginFailureAction } from "../types/actions/loginFailureAction copy";

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    isAuthenticated: null,
    currentUser: null,
    isSubmitting: false,
    isLoading: true,
    validationBackendErrors: null
  },
  reducers: {
    fetchRegister: (state: AuthenticationState, action: FetchRegisterAction): void => { // eslint-disable-line
      // do nothing
    },
    register: (state: AuthenticationState): void => {
      state.isSubmitting = true;
    },
    registerSuccess: (state: AuthenticationState): void => {
      state.isSubmitting = false;
      state.isAuthenticated = true;
      state.validationBackendErrors = null;
    },
    registerFailure: (state: AuthenticationState, action: RegisterFailureAction): void => {
      state.isSubmitting = false;
      state.isAuthenticated = false;
      state.validationBackendErrors = action.payload;
    },
    clearBackendErrors: (state: AuthenticationState): void => {
      state.validationBackendErrors = null;
    },
    fetchLogin: (state: AuthenticationState, action: FetchLoginAction): void => { // eslint-disable-line
      // do nothing
    },
    login: (state: AuthenticationState): void => {
      state.isSubmitting = true;
    },
    loginSuccess: (state: AuthenticationState): void => {
      state.isSubmitting = false;
      state.isAuthenticated = true;
    },
    loginFailure: (state: AuthenticationState, action: LoginFailureAction): void => {
      state.isSubmitting = false;
      state.isAuthenticated = false;
      state.validationBackendErrors = action.payload;
    },
    fetchAuthMe: (): void => {
      // do nothing
    },
    setCurrentUser: (state: AuthenticationState, action: SetCurrentUserAction ): void => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    disableLoader: (state: AuthenticationState): void => {
      state.isLoading = false;
    },
    fetchLogout: (): void => {
      // do nothing
    },
    logout: (state: AuthenticationState): void => {
      state.isSubmitting = true;
    },
    logoutSuccess: (state: AuthenticationState): void => {
      state.isSubmitting = false;
      state.isAuthenticated = false;
      state.currentUser =  null;
    },
    logoutFailure: (state: AuthenticationState): void => {
      state.isSubmitting = false;
    }
  }
});

export default authenticationSlice.reducer;
export const { fetchRegister, register, registerSuccess, registerFailure,
  fetchLogin, login, loginSuccess, loginFailure, fetchAuthMe, setCurrentUser,
  clearBackendErrors, fetchLogout, logout, logoutSuccess, logoutFailure,
  disableLoader } = authenticationSlice.actions;