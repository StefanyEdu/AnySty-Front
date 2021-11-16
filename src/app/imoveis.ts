export interface Imovel {
  id: number;
  cidade: string;
  imovel: string;
  preco: string;
  disponibilidade: string;
  uf: string;
  quantquartos: string;
  dataInicio: string;
  dataFim: string;
  numPessoas: string;
}
export const imoveis = [
  {
    id: 1,
    cidade: 'Porto Alegre',
    imovel: 'Apartamento',
    preco: '100',
    disponibilidade: 'Dezembro a Janeiro',
    uf: 'Rio Grande do Sul',
    quantquartos: '2',
    dataInicio: '',
    dataFim: '',
    numPessoas: '',
  },
  {
    id: 2,
    cidade: 'Porto Alegre',
    imovel: 'Casa',
    preco: '150',
    disponibilidade: 'Dezembro a Janeiro',
    uf: 'Rio Grande do Sul',
    quantquartos: '1',
    dataInicio: '',
    dataFim: '',
    numPessoas: '',
  },
  {
    id: 3,
    cidade: 'Porto Alegre',
    imovel: 'Apartamento',
    preco: '100',
    disponibilidade: 'Dezembro a Fevereiro',
    uf: 'Rio Grande do Sul',
    quantquartos: '3',
    dataInicio: '',
    dataFim: '',
    numPessoas: '',
  },
  {
    id: 2,
    cidade: 'Florianopolis',
    imovel: 'Casa',
    preco: '100',
    disponibilidade: 'Dezembro a Janeiro',
    uf: 'Santa Catarina',
    quantquartos: '2',
    dataInicio: '',
    dataFim: '',
    numPessoas: '',
  },
];
