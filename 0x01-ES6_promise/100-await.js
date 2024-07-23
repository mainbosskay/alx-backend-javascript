import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  let ArrResp = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    ArrResp = { photo, user };
  } catch (caughtErr) {
    ArrResp = { photo: null, user: null };
  }
  return ArrResp;
}
export default asyncUploadUser;
