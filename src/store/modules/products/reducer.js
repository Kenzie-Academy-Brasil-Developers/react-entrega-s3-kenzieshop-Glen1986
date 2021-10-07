
const defaultState = [
  {name: "Echo Dot", price: 279.00, image: "https://pixabay.com/get/g905d9b8e05f5b0d1ee5ba668d717fb2b76bc389564104f7b361a66d0c0fdd4b02b0181bc6cf5ace3d3a0967423c270c34dc9b43172367c6c7435d40c37e7e1040216ba2e79b79fd76a5f0b6d9f91b98e_640.jpg"},
  {name: "Kindle Paperwhite", price: 499.00, image: "https://pixabay.com/get/gb27a825bb87ba55fbb91f0d9dd534403b9aeae8d0d1d64ca303827e6b7e31e0779f6af77ffeb3b96efe2c78b947d3238f53ac73980f07322a8038a0124dee0bdb8e7e75278dd66a6300143f0c95d5e41_640.jpg"},
  {name: 'Smart TV LED 50', price: 1999.00, image:"https://pixabay.com/get/ga2d928e4a9e473f384b3c92b56de105d93f17e933b1fac178e03700dd6b474420a70d6f81e47afb6bba47216a795511a855ea7702ddc0b5f45b0836964c77dd7414ce5104254468d4826c11acdf7798b_640.png" },
  {name: 'PlayStation 5', price: 12000.00, image:"https://pixabay.com/get/g94bd48ba2174001667bcdc4bfbf321d728cae9858af775b5418fe7d48e75d6c398673ad0f747de14d7585b83d2aa5266226d912072e98012dfbaa37bddee73319489e86e812f93d8b442d9e0617955c8_640.png" },
  {name: 'Notebook Acer Nitro 5', price: 5109.72, image:"https://pixabay.com/get/g96b179f492c3c54ec5554c96710c25f70829efe1bb106eab298f7b62bb5f5a0f53ebbf111af9aa32d671ef61287a5f096b199bbb7625c26729fb75b9ca85ee0e1e1783b895d11ef8872be55f5da1b969_640.jpg"},
  {name: 'Headset s fio Logitech G935', price: 1359.00, image:"https://pixabay.com/get/ge0bf54621664b6653a8561faf1a6903137404f702741dc17b00c333a19dc469e0e2e0edf1b2592287a956a886d4f460235badb7c795954db37fb3616104129a113684fa9540485db05b5d9064ce7122b_640.jpg"},

];

const productsReducer = (state = defaultState, action) => {
  console.log("PRODUCTS", action);
  return state;
};

export default productsReducer;
