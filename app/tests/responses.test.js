describe('Sample Test', () => {
  test('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

const axios = require('axios')
const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)
jest.mock('axios')

describe('getroot', () => {
  test('should give 200 if API gives good respose', async () => {
    const apiresponse = {"status":"good!","data":[{"title":"Gear","first_name":"Alex","last_name":"Parks","status":"Ready for Pickup","printed_picture_file":"uploads/upload_ffb7a1b3a0a94156ac42e687dbc1f2ef.jpg"},{"title":"DnD Goblin Chief","first_name":"Tyler","last_name":"Kalczuk","status":"Ready for Pickup","printed_picture_file":"uploads/upload_0dcd62fc6ab71c2da78fe7917bf6cba4.jpg"},{"title":"Baby Yoda Tree Topper","first_name":"Evan","last_name":"Perez-Navarro","status":"Ready for Pickup","printed_picture_file":"uploads/upload_d4d5ef4f84bdde79696fd7662cea511e.jpg"},{"title":"December 16","first_name":"Cassius","last_name":"Hossfeld","status":"Ready for Pickup","printed_picture_file":"uploads/upload_27ce00e24fcf94dd1162a452598d993d.jpg"},{"title":"Plucker Conoid 4","first_name":"gabriel","last_name":"lugo","status":"Ready for Pickup","printed_picture_file":"uploads/upload_33bcfe50db7c539aca7d4bc0a8ebd692.jpg"},{"title":"Minnie 2.0","first_name":"Kendall ","last_name":"Preslar","status":"Ready for Pickup","printed_picture_file":"uploads/upload_9d9a9a4cca7d951d34c8fb17853ac202.jpg"},{"title":"Enclosure","first_name":"Jerome","last_name":"Tan","status":"Ready for Pickup","printed_picture_file":"uploads/upload_b24f1282b01b7f888db04f054dfd8c72.jpg"},{"title":"enclosure","first_name":"Daniel","last_name":"Himebauch","status":"Ready for Pickup","printed_picture_file":"uploads/upload_cdbca5d94c24d5a1b1f248085403d6c1.jpg"},{"title":"flute thumb piece","first_name":"Beth","last_name":"Thompson","status":"Ready for Pickup","printed_picture_file":"uploads/upload_5c89db5a8112f3fc922618c352f60aa8.jpg"},{"title":"Taung Child Skull","first_name":"Tara","last_name":"Robert","status":"Ready for Pickup","printed_picture_file":"uploads/upload_b19672d1d3a740416644dbb96f32d95c.jpg"},{"title":"Pickett","first_name":"Lauren","last_name":"Calhoun","status":"Ready for Pickup","printed_picture_file":"uploads/upload_10f012a48decff55c62e4b527b8c3c88.jpg"},{"title":"Titanic Bed ","first_name":"Taylor","last_name":"Walters-Riggsbee","status":"Ready for Pickup","printed_picture_file":"uploads/upload_ae78877057889290273a7a38f044902d.jpg"},{"title":"Oreo Box Part 1 outside","first_name":"Lee","last_name":"Edelstein","status":"Ready for Pickup","printed_picture_file":"uploads/upload_2710120a3033e5c57cdd9e9fb25932f2.jpg"},{"title":"Oreo Inside","first_name":"Lee","last_name":"Edelstein","status":"Ready for Pickup","printed_picture_file":"uploads/upload_be5ef2f5445e60ecc138e20a82e774d5.jpg"},{"title":"oreo inside","first_name":"Lee","last_name":"Edelstein","status":"Ready for Pickup","printed_picture_file":"uploads/upload_5a6474c7d43548915a98bb1211bfd46a.jpg"},{"title":"Boat part","first_name":"Alex","last_name":"Parks","status":"Ready for Pickup","printed_picture_file":"uploads/upload_65e5381cb5fd8142b0bee609376c260a.jpg"},{"title":"Stormbreaker handle 2a","first_name":"John","last_name":"Diakogiannis","status":"Reviewed and Approved","printed_picture_file":null},{"title":"Stormbreaker handle 2b","first_name":"John","last_name":"Diakogiannis","status":"Reviewed and Approved","printed_picture_file":null},{"title":"Strombreaker handle 9","first_name":"John","last_name":"Diakogiannis","status":"Reviewed and Approved","printed_picture_file":null},{"title":"Stormbreaker handle 10","first_name":"John","last_name":"Diakogiannis","status":"Reviewed and Approved","printed_picture_file":null},{"title":"Stormbreaker handle 1b","first_name":"John","last_name":"Diakogiannis","status":"Reviewed and Approved","printed_picture_file":null},{"title":"Shovel","first_name":"Lee","last_name":"Edelstein","status":"Reviewed and Approved","printed_picture_file":null},{"title":"Kyber Crystal Rack 1","first_name":"Dana","last_name":"Ward","status":"Reviewed and Approved","printed_picture_file":null},{"title":"Kyber Crystal Rack 2","first_name":"Dana","last_name":"Ward","status":"Reviewed and Approved","printed_picture_file":null},{"title":"Stormbreaker handle 1a","first_name":"John","last_name":"Diakogiannis","status":"Reviewed and Approved","printed_picture_file":null},{"title":"Cookie Cutter","first_name":"Sam","last_name":"Woolhiser","status":"Reviewed and Approved","printed_picture_file":null},{"title":"KIyber Crystal Rack 3","first_name":"Dana","last_name":"Ward","status":"Reviewed and Approved","printed_picture_file":null},{"title":"Goose Body","first_name":"Timothy","last_name":"Hamilton","status":"Just Arrived","printed_picture_file":null},{"title":"Goose beak and feet","first_name":"Timothy","last_name":"Hamilton","status":"Just Arrived","printed_picture_file":null},{"title":"Goose Eyes","first_name":"Timothy","last_name":"Hamilton","status":"Just Arrived","printed_picture_file":null},{"title":"touchscreen bezel","first_name":"Ethan","last_name":"Lee","status":"Just Arrived","printed_picture_file":null}]}
    axios.get.mockImplementationOnce(() => Promise.resolve(apiresponse))
    const res = await request.get('/')
    expect(res.status).toBe(200)
  })
  test('should give 500 if API request errors out', async () => {
    axios.get.mockImplementationOnce(() => Promise.rejects)
    const res = await request.get('/')
    expect(res.status).toBe(500)
  })
})

describe('getimagerotation', () => {
  test('should give 200 if API gives good respose', async () => {
    const apiresponse = {"status":"good!","data":[{"printed_picture_file":"uploads/upload_65e5381cb5fd8142b0bee609376c260a.jpg","printed_picture_file_original":"IMG_0742.jpg"},{"printed_picture_file":"uploads/upload_5a6474c7d43548915a98bb1211bfd46a.jpg","printed_picture_file_original":"IMG_0189.jpg"},{"printed_picture_file":"uploads/upload_be5ef2f5445e60ecc138e20a82e774d5.jpg","printed_picture_file_original":"thumbnail_20200306_082526.jpg"},{"printed_picture_file":"uploads/upload_2710120a3033e5c57cdd9e9fb25932f2.jpg","printed_picture_file_original":"thumbnail_20200306_115154.jpg"},{"printed_picture_file":"uploads/upload_ae78877057889290273a7a38f044902d.jpg","printed_picture_file_original":"IMG_0190.jpg"},{"printed_picture_file":"uploads/upload_505767a9bd274f83fb666a7933c04276.jpg","printed_picture_file_original":"thumbnail_20200306_171121.jpg"},{"printed_picture_file":"uploads/upload_7b7a016fdc9d8cb3071abc0d16fa1436.jpg","printed_picture_file_original":"IMG_0188.jpg"},{"printed_picture_file":"uploads/upload_87e8c51b6d2981d193f7aeb9c492e156.jpg","printed_picture_file_original":"20200312_093905.jpg"},{"printed_picture_file":"uploads/upload_f948aa94c20250576ac955b8b60d8384.jpg","printed_picture_file_original":"20200310_154106.jpg"},{"printed_picture_file":"uploads/upload_4aded3a842b50d32c509c474890e779f.jpg","printed_picture_file_original":"20200309_153953.jpg"},{"printed_picture_file":"uploads/upload_504ee41bad408a5592c092053abdff75.jpg","printed_picture_file_original":"20200306_073503.jpg"},{"printed_picture_file":"uploads/upload_95d123628679614c3d66f1a00403a459.jpg","printed_picture_file_original":"20200309_083206.jpg"},{"printed_picture_file":"uploads/upload_a21ace3cd5bfbc7f0851e532ecd35eb2.jpg","printed_picture_file_original":"thumbnail_Image (3).jpg"},{"printed_picture_file":"uploads/upload_5443adf5ddc9e5ba4629db3b574c4287.jpg","printed_picture_file_original":"thumbnail_Image (2).jpg"},{"printed_picture_file":"uploads/upload_47d9aca1da2ac3b88086cff1705f144d.jpg","printed_picture_file_original":"thumbnail_Image (4).jpg"},{"printed_picture_file":"uploads/upload_968820d6f1989f5df695d272d1c918cf.jpg","printed_picture_file_original":"thumbnail_Image (1).jpg"},{"printed_picture_file":"uploads/upload_cf9aa941e9c60491cfc65704d1140b73.jpg","printed_picture_file_original":"thumbnail_20200304_095102.jpg"},{"printed_picture_file":"uploads/upload_b19672d1d3a740416644dbb96f32d95c.jpg","printed_picture_file_original":"IMG_0187.jpg"},{"printed_picture_file":"uploads/upload_79969a935b60aa1b2a29d651c72ec90d.jpg","printed_picture_file_original":"IMG_0670.jpg"},{"printed_picture_file":"uploads/upload_6757d166e19a535d6a2dfada1fe89f23.jpg","printed_picture_file_original":"IMG_0670.jpg"}]}
    axios.get.mockImplementationOnce(() => Promise.resolve(apiresponse))
    const res = await request.get('/image_rotation')
    expect(res.status).toBe(200)
  })
  test('should give 500 if API request errors out', async () => {
    axios.get.mockImplementationOnce(() => Promise.rejects)
    const res = await request.get('/image_rotation')
    expect(res.status).toBe(500)
  })
})

describe('getwrongpage', () => {
  test('should give 404 for wrong page', async () => {
    const res = await request.get('/nonexistantpage')
    expect(res.status).toBe(404)
  })
})
