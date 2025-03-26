# EcoDeli Made By GOAT Co.

## Créer un fichier .env

A la racine du projet créer un .env ou un .dev.env

C'est vos variables d'environnements

Assurer vous que vos **scripts** dans le fichier **package.json** pointent vers votre fichier .env

## Initialiser la BDD

Il est nécessaire de configurer un .env avec les variables suivantes, pour se connecter à la base de données :

DB_DIALECT=mysql
DB_USERNAME=
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=3306
DB_NAME=

**!!! N'oublier pas de créer la base de données avec la même valeur assigner à DB_NAME !!!**

## Autres variables d'environnements

PORT=3000
URL=localhost:3000

ACCESS_TOKEN_KEY=helloAccess
REFRESH_TOKEN_KEY=helloRefresh

COOKIE_SECRET=helloCookie
APP_SECRET=helloApp

## Migration BDD

Une variable d'environnement qui agis "en tant que boolean" pour faire la migration coté developpement

MIGRATE=1

Si MIGRATE=1 alors migrer
Si MIGRATE=0 alors pas migrer

**L'utiliser avec parcimonie car peut alter vos models**

---

**Projet annuel deuxième année - ESGI | Promotion 2A4**
