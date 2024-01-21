type secadoras = {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
};
const SECADORAS = [
//Secadoras
  {
    id: 'p25',
    title: 'SECADORA DOMESTICA, REGULADOR:SI, 23 mbar, 7.2 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-25.jpg',
    link: 'https://abb.com',
  },
  {
    id: 'p26',
    title: 'SECADORA INDUSTRIAL, REGULADOR:SI, 23 mbar, 20 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-26.jpg',
    link: 'https://abb.com',
  },
  ];

export async function getSecadoras() {
  return SECADORAS;
  }