# satck-demo-api
A demo api to showcase the features of the GP stack

**example `./api/package.json` scripts**
```
"scripts": {
  "start": "env-cmd .env babel-node src/index.js --silent",
  "production": "babel --presets latest,stage-2 src --out-dir /build"
}
```

**example `./api/.env` file**
```
# GENERAL
APP_ROOT="https://localhost:3000"
API_NAME="stack-demo"
API_PORT=3001
API_ROOT="https://localhost:3001"
API_LOGENTRIES_TOKEN="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

# HTTPS NODE SERVER
# Set to 0 to allow for self-signed TLS certificates during development
NODE_TLS_REJECT_UNAUTHORIZED="0"


# Self-signed certs for development
# To generate a private key and public cert with no passphrase for TLS use:
# > openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 3650 -nodes

TLS_CERT="MIIE7TC...+gozUoKc="
TLS_KEY="MIIJRAIB...DBq1R"


# AMAZON AWS
AWS_ACCESS_KEY_ID="xxxxxxxxxxxxxxxxxxxx"
AWS_SECRET_ACCESS_KEY="xxxxxxxxxxxxxxxxxxxxx"
AWS_ROOT_BUCKET="goodpractice"


# SSO
SSO_COOKIE_SECRET="95tuX...entropy...LWebas"
SSO_IDP_URL="https://accounts.google.com/o/saml2/idp?idpid=C03qui8l3"
SSO_SP_ENTITYID="manage-star-local"
SSO_SP_PRIVATE_KEY="MIIJRA...0Pmf2"


# GP-API
GP_API_URL="http://localhost:8082"
GP_API_PUBLIC="xxxxxxxxxxxxxxxxxxxxxxxx"
GP_API_SECRET="xxxxxxxxxxxxxxxxxxxxxxxx"
GP_API_ADMIN="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

```
