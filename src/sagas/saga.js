//import { delay } from "redux-saga"
import { put, takeLatest } from "redux-saga/effects"
import axios from "axios";
import { fetchDataSuccess } from '../store/actions/actions'


function* fetchData() {
  let data = yield axios.post(`http://staging.watsoo.com:8080/watsoo-amazon-api//trip-controller-web/v1/vehicle/wise/summary/36`, {
    "clientId": 10,
    "dataRecord": {
      "userRoleId": 4,
      "userRoleName": "COMPANY",
      "userId": 10
    },
    "fromDate": 1577888571659,
    "toDate": 1593613371659,
    "tripId": 36
  }
  )
  console.log(11,data)

  yield put(fetchDataSuccess({ data: data.data }))
}



export function* watchfetchData() {
  yield takeLatest("FETCH_DATA", fetchData)
}