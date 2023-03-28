/* eslint-disable prettier/prettier */
const request = require('supertest');
const { app } = require('../server');

// aqui colocaremos las pruebas...
//1.Se escribe la prueba pero aun no se tiene escrita la funcion de POST y falla
describe('POST /products', () => {
    test('GIVEN that a user wants to add a new product to her inventory, WHEN clicks on add, THEN the product is created.',
     async () => {
        const response = await request(app)
          .post('/products')
          .send({
            name: 'my product',
            description: 'this is a test',
            price: '100',
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
      
        expect(response.body).toEqual({
          name: 'my product',
          description: 'this is a test',
          price: '100',
          _id: 'abc',
        })
      })      
  })
  