const SHD_URL = process.env.SHD_URL;

const SHD_BASICAUTH_LOGIN = process.env.SHD_BASICAUTH_LOGIN;
const SHD_BASICAUTH_PASSWORD = process.env.SHD_BASICAUTH_PASSWORD;

const SHD_LOGIN = process.env.SHD_LOGIN;
const SHD_PASSWORD = process.env.SHD_PASSWORD;

const login = async () => {
  const response = await fetch(`${SHD_URL}/login/`, {
    method: 'POST', 
    redirect: 'manual',
    follow: 10,
    headers: {
      'authorization': 'basic ' + Buffer.from(SHD_BASICAUTH_LOGIN + ":" + SHD_BASICAUTH_PASSWORD).toString('base64'),
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      email: SHD_LOGIN,
      password: SHD_PASSWORD,
    }).toString(),
  });

  const cookies = response.headers.get('set-cookie');
  const jwt = cookies.match(/jwt=([^;]*)/)[1];

  return jwt;
}

const createSchool = async (jwt) => {
  const response = await fetch(`${SHD_URL}/schools/`, {
    method: 'POST', 
    redirect: 'manual',
    follow: 10,
    headers: {
      'authorization': 'basic ' + Buffer.from(SHD_BASICAUTH_LOGIN + ":" + SHD_BASICAUTH_PASSWORD).toString('base64'),
      'content-type': 'application/x-www-form-urlencoded',
      'cookie': `jwt=${jwt}`,
    },
    body: new URLSearchParams({
      name: 'Test-Oberschule-4',
      fileStorageType: 'awsS3',
      password: SHD_PASSWORD,
      officialSchoolNumber: '',
      ldapSchoolIdentifier: '',
    }).toString(),
  });

  console.log("Status:", response.status);
  const data = await response.text();
  console.log(data);

  return response.status;
}

(async () => {
  const jwt = await login();
  console.log(jwt);
  await createSchool(jwt);
})();
