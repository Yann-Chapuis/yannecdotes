# Utilisez l'image officielle Node.js comme image de base
FROM node:19-alpine3.16

# Définissez le répertoire de travail
WORKDIR /app

# Copiez package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances du projet
RUN npm install

# Copiez le reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Exposez le port sur lequel l'application sera accessible
EXPOSE 7000

# Démarrez l'application
CMD ["npm", "run", "dev"]
