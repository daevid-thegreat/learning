const Pool = require('pg').Pool
const pool = new Pool({ 
    user: 'testuser',
    host: 'localhost',
    database: 'testdb',
    password: 'testpassword',
    port: 5432,
    })

// CREATE ROUTE FUNCTION TO RETRIEVE ALL RECORDS FROM DATABASE TABLE
const getCountries = (request, response) => {
    pool.query('SELECT * FROM countries ORDER BY id ASC', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}

// CREATE ROUTE FUNCTION TO RETRIEVE A SINGLE RECORD FROM THE DATABASE
const getCountryById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM countries WHERE id = $1', [id], (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}

// CREATE ROUTE FUNCTION TO ADD NEW RECORD INTO THE DATABASE
const createCountry = (request, response) => {
    const { name, capital } = request.body

    pool.query('INSERT INTO countries (name, capital) VALUES ($1, $2)', [name, capital], (error, results) => {
    if (error) {
        throw error
    }
    response.status(201).send('A new country has been added to the database')
    })
}

// CREATE ROUTE FUNCTION TO UPDATE EXISTING DATABASE RECORDS

const updateCountry = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, capital } = request.body

    pool.query(
    'UPDATE countries SET name = $1, capital = $2 WHERE id = $3',
    [name, capital, id],
    (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send('Country has been updated in the database')
    }
    )
}

// CREATE ROUTE FUNCTION TO DELETE A RECORD FROM THE DATABASE TABLE

const deleteCountry = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM countries WHERE id = $1', [id], (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).send(`Country deleted with ID: ${id}`)
    })
}

module.exports = {
    getCountries,
    getCountryById,
    createCountry,
    updateCountry,
    deleteCountry,
}
