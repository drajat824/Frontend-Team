export const SETAUTH = "SETAUTH"
export const SETAUTHERROR = "SETAUTHERROR"
export const SETAUTHLOGOUT = "SETAUTHLOGOUT"

export const SETUSERDATA = "SETUSERDATA"
export const SETBALANCE = "SETBALANCE"
export const SETUSERERROR = "SETUSERERROR"
export const SETHISTORYDATA = "SETHISTORYDATA"
export const ADDHISTORYDATA = "ADDHISTORYDATA"
export const SETTOPUPDATA = "SETTOPUPDATA"
export const SETFINDUSERDATA = "SETFINDUSERDATA"
export const ADDFINDUSERDATA = "ADDFINDUSERDATA"
export const SETFINDIDDATA = "SETFINDIDDATA"
export const SETHISTORYIDDATA = "SETHISTORYIDDATA"
export const SETPHOTO = "SETPHOTO"
export const SETPHONE = "SETPHONE"

export const SETADMINERROR = "SETADMINERROR"
export const UPDATEUSER = "UPDATEUSER"
export const SETALERTDIMISS = "SETALERTDIMISS"

export const options = (constant, payload = null) => ({
  type: constant,
  payload: payload
})