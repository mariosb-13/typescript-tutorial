interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: number,
    website: string,
    company: Company
}

interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: number,
    geo: Geo
}

interface Geo {
    lat: number,
    lng: number
}

interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}


/**
 * Devuelve un array con todos los usuarios de la API
 * @returns Promise<User[]>
 */
async function obtenerUsuarios(): Promise<User[]> {

    const URL = `https://jsonplaceholder.typicode.com/users`;

    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
        throw new Error(`Error HTTP ${respuesta.status}`);
    }

    const datos = await (respuesta.json() as Promise<User[]>)

    const usuarios: User[] = datos.map((u: User) => { return { id: u.id, name: u.name, username: u.username, email: u.email, address: u.address, phone: u.phone, website: u.website, company: u.company } })

    return usuarios;
}

/**
 * Funcion asincrona que devuelve un usuario dependiendo del id que se le pase como parámetro
 * @param uid ID del usuario
 * @returns Promise<User>
 */
async function obtenerUsuario(uid: number): Promise<User> {

    const URL = `https://jsonplaceholder.typicode.com/users/${uid}`;

    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
        throw new Error(`Error HTTP ${respuesta.status}`);
    }

    const datos = await (respuesta.json() as Promise<User>)
    return datos;
}

//console.dir para que muestre todos los niveles (un objeto dentro de otro) en la consola
obtenerUsuarios().then((datos) => {console.dir(datos,{depth:null}) }).catch()

//obtenerUsuarios().then((datos) => { console.log(datos.forEach((u) => { console.log(u) })) }).catch()
//obtenerUsuario(1).then((datos) => { console.log(datos) }).catch()

