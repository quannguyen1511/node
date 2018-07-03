//cac thong bao loi
module.exports = {
  ERROR_MESSAGE: {
    USER: {
      EXIST: "USER_EXIST",
      NOT_FOUND: "USER_NOT_EXIST",
      WRONG_PASS: "WRONG_PASSWORD",
      EMPTY_NAME: "EMPTY_NAME",
      NOT_STANDARD: {
        PASS: "NONSTANDARD_PASSWORD",
        EMAIL: "NONSTANDARD_EMAILS"
      }
    }
  },
  SUCCESS_MESSAGE: {
    USER: {
      CREATED: "USER_CREATED",
      DELETED: "USER_DELETED",
      LOGIN: "LOGIN_SUCCESS",
      CHANGE: {
        PASS: "PASS_CHANGED",
        INFO: "INFO_CHANGED"
      }
    }
  }
};
