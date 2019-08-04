
const calculateHash = require('./hash');
const images = [
  'https://images.craigslist.org/00A0A_eFlnUxV5UUr_600x450.jpg',
  'https://images.craigslist.org/01717_eHrxzzLEL7i_600x450.jpg',
  'https://images.craigslist.org/00B0B_h4zRq2AhLZq_600x450.jpg',
  'https://images.craigslist.org/00a0a_eK31qhJHn8G_600x450.jpg',
  'https://images.craigslist.org/00r0r_eMqoftHeu3d_600x450.jpg',
  'https://images.craigslist.org/01313_kMHezjR6pkf_600x450.jpg',
  'https://images.craigslist.org/01515_1a0FFtygPqx_600x450.jpg',
  'https://images.craigslist.org/00B0B_iv956RYwhfs_600x450.jpg',
  'https://images.craigslist.org/00D0D_7ZwMo4maSpM_600x450.jpg',
  'https://images.craigslist.org/00v0v_fAYVaoVFvku_600x450.jpg',
];

module.exports = {
  listings : [...Array(50)].map((o, i)=> ({
      title: 'Nice House'+i,
      description: 'look at this house yo'+i,
      price: 1000 + Math.floor(Math.random()*500*i),
      images: [
        images[ Math.floor(Math.random()*images.length)],
        images[ Math.floor(Math.random()*images.length)],
      ],
      author: (i % 4) + 1,
    }) ),

  users: [
    { email: 'nik@nik.nik', passwordHash: calculateHash('guest')},
    { email: 'dave@nik.nik', passwordHash: calculateHash('guest')},
    { email: 'avi@nik.nik', passwordHash: calculateHash('guest')},
    { email: 'raph@nik.nik', passwordHash: calculateHash('guest')},
  ],
};
