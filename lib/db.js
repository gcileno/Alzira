//import mysql from "serverless-mysql";

export const db = mysql({

    config: {
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.DBUSERNAME,
        password: process.env.DBPASSWORD

    }

})

export async function query(q) {

    try {
      const results = await db.query(q)
      await db.end()
      return results
    } catch (e) {
      throw Error(e.message)
  
    }
  
  }

// pesquisar cartas

export async function searchCarta(nome) {
    try {
        const queryString = 'SELECT * FROM Carta WHERE nome = ?';
        const results = await query(queryString, [nome]);

        return results;
    } catch (error) {
        console.error('Erro durante a pesquisa de carta:', error.message);
        throw error; // Rejeita a Promise para que a chamada da função possa lidar com o erro
    }
}

// criar novos usuarios

async function NewUser() {

}
