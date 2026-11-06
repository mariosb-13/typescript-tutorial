/**
 * Simulacion de una funcion que devuelve una promesa
 * @param ms 
 * @returns 
 */
function espera(ms: number) {
  return new Promise<string>((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("El tiempo de espera no puede ser negativo"))
    } else {
      setTimeout(() => { resolve(`Se ha realizado una espera de ${ms} ms`) }, ms)
    }
  })
}

console.log("Hola Mundo");

espera(5000)
  .then((resultado: string) => { console.log(resultado) })
  .catch((e: Error) => { console.log(`Se ha producido un error: ${e}`) })
  .finally(() => { console.log(`La promesa ha acabado`) })

console.log("Adios");


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


async function getDatos(id: number): Promise<Post> {
  const URL = `https://jsonplaceholder.typicode.com/posts/${id}`
  let response: Response = await fetch(URL)

  let data = (await response.json() as Post)

  return data;

}

getDatos(4).then((post: Post) => { console.log(post) }).catch((e: Error) => { console.log(e.message) })

async function getPost(): Promise<Post[]> {
  const URL = `https://jsonplaceholder.typicode.com/posts/`
  let response: Response = await fetch(URL)

  let data = (await response.json() as Post[])

  return data;
}

getPost().then((post: Post[]) => { console.log(post) }).catch((e: Error) => { console.log(e.message) })