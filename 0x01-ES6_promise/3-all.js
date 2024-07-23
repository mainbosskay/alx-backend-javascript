import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((ArrResp) => {
      console.log(`${ArrResp[0].body} ${ArrResp[1].firstName} ${ArrResp[1].lastName}`)
    })
    .catch(() => console.log('Signup system offline'));
}
export default handleProfileSignup
