import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((ArrResp) => (
      ArrResp.map((resp) => ({
        status: resp.status,
        value: resp.status === 'fulfilled' ? resp.value : String(resp.reason),
      }))
    ));
}
export default handleProfileSignup;
