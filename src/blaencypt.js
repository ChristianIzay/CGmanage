/* eslint-disable prettier/prettier */
function sendEncryptedRequest(url, data) {
  // Générer une clé aléatoire
  const key = crypto.getRandomValues(new Uint8Array(32));

  // Créer un IV (Initialisation Vector) aléatoire
  const iv = crypto.getRandomValues(new Uint8Array(16));

  // Chiffrer les données
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encryptedData = cipher.update(data, 'utf8', 'base64');
  encryptedData += cipher.final('base64');

  // Concaténer l'IV aux données chiffrées
  const payload = iv.toString('base64') + encryptedData;

  // Créer la requête XMLHttpRequest
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'text/plain');
  xhr.send(payload);
}

// Exemple d'utilisation
const dataToEncrypt = 'Ceci sont des données sensibles';
const url = 'https://127.0.0.1:3001';
sendEncryptedRequest(url, dataToEncrypt);