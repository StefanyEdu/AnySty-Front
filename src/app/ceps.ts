export interface Cep {
  id: number;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}
export const ceps = [
  {
    id: 1,
    cep: '994250554',
    logradouro: 'Rua Paulo Remato Ketzer de Souza',
    complemento: '',
    bairro: 'Rubem Berta',
    cidade: 'Porto Alegre',
    uf: 'RS',
  },
  {
    id: 2,
    cep: '90040-191',
    logradouro: 'Av. Venâncio Aires',
    complemento: '',
    bairro: 'Cidade Baixa',
    cidade: 'Porto Alegre',
    uf: 'RS',
  },
  {
    id: 3,
    cep: '94853310',
    logradouro: 'Rua: Manoel Bernardes',
    complemento: '',
    bairro: 'Intersul',
    cidade: 'Alvorada',
    uf: 'RS',
  },
  {
    id: 4,
    cep: '90620001',
    logradouro: 'Av. Princesa Isabel',
    complemento: '',
    bairro: 'Azenha',
    cidade: 'Porto Alegre',
    uf: 'RS',
  },
];
