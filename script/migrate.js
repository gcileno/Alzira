const path = require('path')
const envPath = path.resolve(process.cwd(), '.env.local')
const fetch = require('cross-fetch')
require('dotenv').config({ path: envPath })
const mysql = require('serverless-mysql')



const db = mysql({

  config: {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,

  },

})

async function query(q) {

  try {

    const results = await db.query(q)

    await db.end()

    return results

  } catch (e) {

    throw Error(e.message)

  }

}

async function createTables() {
  try {
    // Tabela Usuario
    await query(`
        CREATE TABLE Usuario (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(50) NOT NULL,
          senha VARCHAR(255) NOT NULL,
          data_nascimento DATE,
        );
      `);

    // Tabela ListaFavoritos
    await query(`
        CREATE TABLE ListaFavoritos (
          id INT AUTO_INCREMENT PRIMARY KEY,
          usuario_id INT,
          nome_carta VARCHAR(50),
          significado TEXT,
          FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
        );
      `);

    // Tabela ListaTarotDoDia
    await query(`
        CREATE TABLE ListaTarotDoDia (
          id INT AUTO_INCREMENT PRIMARY KEY,
          usuario_id INT,
          data DATE,
          carta_id INT,
          FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
          FOREIGN KEY (carta_id) REFERENCES Carta(id)
        );
      `);

    // Tabela Carta
    await query(`
        CREATE TABLE Carta (
          id INT AUTO_INCREMENT PRIMARY KEY,
          nome VARCHAR(50) NOT NULL,
          arcano VARCHAR(20),
          significado TEXT,
          imagem_url VARCHAR(250)
        );
      `);

    console.log('Tables created successfully');
  } catch (error) {
    console.error('Could not run createTables:', error);
    process.exit(1);
  }
}

async function NewUser(){

}

async function migrate() {

  try {
    
    await createTables()
    console.log('migration ran successfully')

  } catch (e) {

    console.error('could not run migration, double check your credentials.')

    process.exit(1)

  }

}



migrate().then(() => process.exit())