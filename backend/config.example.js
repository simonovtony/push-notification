
const serviceAccount = {
    type: "---",
    project_id: "---",
    private_key_id: "---",
    private_key: "---",
    client_email: "---",
    client_id: "---",
    auth_uri: "---",
    token_uri: "---",
    auth_provider_x509_cert_url: "---",
    client_x509_cert_url: "---"
};

const firebaseConfig = {
    apiKey: "---",
    authDomain: "---",
    projectId: "---",
    storageBucket: "---",
    messagingSenderId: "---",
    appId: "---",
    measurementId: "---"
};

module.exports = {
    port: 8080,
    firebaseConfig,
    serviceAccount,
}