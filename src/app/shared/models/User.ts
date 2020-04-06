export interface UserI {
  _id: string;
  name: string;
  surname: string;
  sex: string;
  email: string;
  password: string;
  image: string;
}

export interface UserUpdateI {
  name: string;
  surname: string;
}

export interface UserResponseI {
  status: string;
  msg: string;
  user: UserI;
}

export interface PasswordUserI {
  password: string;
  new_password: string;
  confirm_password: string;
}

export interface PasswordUserResponseI {
  status: string;
  msg: string;
  user: UserI;
}

export interface EmailUserI {
  email: string;
  new_password: string;
  confirm_password: string;
}

export interface EmailUserResponseI {
  status: string;
  msg: string;
  user: UserI;
}
