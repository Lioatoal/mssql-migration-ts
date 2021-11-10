import { v4 as uuidv4 } from 'uuid';

export default {
  E50000:{
    eid: uuidv4(),
    error: "INTERNAL_SERVER_ERROR",
    data: "Internal server error for something wrong",
    status: 500
  },
  E40000:{
    eid: uuidv4(),
    error: "PARAMS_ERROR",
    data: "Lost required parameter",
    status: 400
  },
  E40100:{
    eid: uuidv4(),
    error: "AUTHORIZATION_ERROR",
    data: "Can not find this Username",
    status: 401
  },
  E40101:{
    eid: uuidv4(),
    error: "AUTHORIZATION_ERROR",
    data: "Username or Password error",
    status: 401
  },
  E40102:{
    eid: uuidv4(),
    error: "TOKEN_VERIFY_ERROR",
    data: "Token verify failed",
    status: 401
  },
  E40300:{
    eid: uuidv4(),
    error: "PERMISSION_ERROR",
    data: "No permission to access resource",
    status: 403
  },
}