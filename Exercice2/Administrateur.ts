// A partir du Type Administrateur créer le type UtilisateurAnonyme en utilisant les fonctions
// utilitaires de Typescript :
interface Administrateur {
nom : string,
email : string ,
ip : string ,
dt_connexion : Date ,
login : string,
password : string
}

interface UtilisateurAnonyme {
nom ?: Omit<Administrateur,"nom">,
ip :  Omit<Administrateur,"ip">
}